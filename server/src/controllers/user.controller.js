const { User } = require('../models');

module.exports.getUsers = async (req, res) => {
    try {
        const users = await User.findAll({ 
            attributes: ["id", "username", "profilePictureUrl"]
        });

        console.log(users);

        res.json(users);
    } catch (error) {
        console.error(error.message);
        res.json(error);
    }
};