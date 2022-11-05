const { Answer } = require('../models');

module.exports.createAnswer = async (req, res) => {
    const { id: questionId } = req.params;
    const { decoded: { id: authorId }, body: { answer: answerBody } } = req;

    try {
        await Answer.create({
            answerBody,
            questionId,
            authorId
        });

        res.end();
    } catch (error) {
        console.log(error);
    }
};

module.exports.voteAnswer = async (req, res) => {
    res.end();
};