const { Answer } = require('../models');

module.exports.createAnswer = async (req, res) => {
    const { id: questionId } = req.params;
    const { decoded: { id: authorId }, body: { answer: answerBody } } = req;

    console.log('authorId', authorId);
    console.log('questionId', questionId);
    console.log('answerBody', answerBody);
    
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
    const { id } = req.params;
    const { vote } = req.body;

    console.log(id, vote);

    res.end();
};