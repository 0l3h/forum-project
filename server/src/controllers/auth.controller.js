const bcrypt = require('bcryptjs');
const { User } = require('../models');
const { Question } = require('../models');
const jwt = require('jsonwebtoken');
const { sign, refresh } = require('../auth/tokens');

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
    console.log('\n', id, '\n')

    try {
        const user = await User.findOne({
            where: { id },
            raw: true,
            nest: true,
            include: [
                { model: Question, as: 'questions' }
            ],
            attributes: { exclude: ['password', 'email'] }
        });

        console.log('user + questions', {user})

        res.json(user);
    } catch (error) {
        console.log('error', error)
        res.json(error);
    }
}

module.exports.login = async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({
            where: { username }
        });

        if (!user) 
            throw new Error('Invalid username or password.');

        const isPasswordMatches = await bcrypt.compare(password, user.password);

        if (!isPasswordMatches) 
            throw new Error('Invalid username or password.');

        const token = sign({ id: user.id });

        const cookieOptions = {
            httpOnly: true,
            sameSite: 'Strict',
            secure: true,
        };

        res.cookie('access-token', token, cookieOptions);
        res.json({ id: user.id });
    } catch (error) {
        res.json(error.message);
    }
};

module.exports.signup = async (req, res) => {
    const { username, email, password } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const userData = { username, email, password: hashedPassword };

        const createdUser = await User.create(userData);

        res.json(createdUser);
    } catch (error) {
        res.json(error.message);
    }
};
