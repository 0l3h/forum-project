const { User } = require('../models');

module.exports.getUsers = async (req, res) => {
    try {
        const users = await User.findAll({ 
            attributes: ["id", "username", "profilePictureUrl"]
        });

        res.json(users);
    } catch (error) {
        res.json(error);
    }
};