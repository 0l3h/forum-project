module.exports.getProfile = async (req, res) => {
    const { params: { id } } = req;

    try {
        const user = await User.findOne({
            where: { id },
            include: 'Questions'
        });

        const questions = await user.getQuestions();

        res.json({...user, questions});
    } catch (error) {
        res.json(error);
    }
};