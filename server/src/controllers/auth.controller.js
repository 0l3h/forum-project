const bcrypt = require('bcryptjs');
const fs = require('fs').promises;
const { Storage } = require('@google-cloud/storage');
const jwt = require('jsonwebtoken');
const { User, Question } = require('../models');
const { sign, refresh } = require('../auth/tokens');
const storage = new Storage({ 
    projectId: process.env.GCP_PROJECT_ID,
    credentials: JSON.parse(process.env.GOOGLE_APPLICATION_CREDENTIALS)
});
const myBucket = storage.bucket(process.env.GCS_BUCKETNAME);

module.exports.auth = async (req, res, next) => {
    const token = req.cookies['access-token'];

    jwt.verify(token, process.env.TOKEN_SECRET, (error, decoded) => {
        if (error) {
            res.end();
        }
        else {
            req.decoded = decoded;
            next();
        }
    });
};

module.exports.getMyProfile = async (req, res) => {
    const { id } = req.decoded;

    try {
        const user = (await User.findOne({
            where: { id },
            include: [
                { model: Question, as: 'questions' }
            ],
            nest: true,
            attributes: { exclude: ['password', 'email'] }
        })).get({ plain: true });

        const file = myBucket.file(`${id}.png`);
        
        const isFileExist = (await file.exists())[0];
        
        if(isFileExist) {
            const profilePictureUrl = (await file.publicUrl());

            res.json({ ...user, profilePictureUrl });
        } else {
            res.json(user);
        }
    } catch (error) {
        console.log('error', error)
        res.json({ message: '500 - Internal server error. Can\'t obtain user data' });
    }
}

module.exports.login = async (req, res) => {
    const { username, password } = req.body;
    const errorMessage = 'Username or password is incorrect';

    try {
        const user = await User.findOne({
            where: { username }
        });

        if (!user) 
            throw new Error(errorMessage);

        const isPasswordMatches = await bcrypt.compare(password, user.password);

        if (!isPasswordMatches) 
            throw new Error(errorMessage);

        const token = sign({ id: user.id });

        const cookieOptions = {
            httpOnly: true,
            sameSite: 'Strict',
            secure: true,
        };

        console.log('\nUser logged in\n');

        res.cookie('access-token', token, cookieOptions);
        res.json({ id: user.id });
    } catch (error) {
        console.log(error.message);
        res.json({ message: '500 - Internal server error. Can\'t log in' });
    }
};

module.exports.signup = async (req, res) => {
    const { username, email, password } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const userData = { username, email, password: hashedPassword };

        const createdUser = await User.create(userData);

        console.log('\nUser signed up\n');
        res.json(createdUser);
    } catch (error) {
        res.json({ message: '500 - Internal server error. Can\'t sign up' });
    }
};

module.exports.updateMyProfile = async (req, res) => {
    const { about, profilePicture, email, password, username } = req.body;
    const { id } = req.decoded;
    
    try {
        const user = await User.findOne({
            where: { id },
        });

        // Upload profile picture to Google Cloud Storage

        if(profilePicture) {
            const file = myBucket.file(`${id}.png`);
            const base64String = profilePicture.split(',').pop();
            const buffer = Buffer.from(base64String, 'base64');
            
            file.save(buffer, { 
                resumable: false,
                metadata: {
                    cacheControl: 'no-store'
                }
            });

            const profilePictureUrl = await file.publicUrl();

            user.update({ profilePictureUrl });
        }

        // Update other user's data

        username && user.update({ username });
        about && user.update({ about });
        email && user.update({ email });
        password && user.update({ password });

        res.json({ message: 'user updated' });
    } catch (error) {
        console.log(error)
        res.json({ message: '500 - Internal server error. Can\'t update user profile' });
    }
};