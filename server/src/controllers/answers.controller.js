const { Answer, Vote } = require('../models');

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
        res.status(500).send();
    }
};

module.exports.voteAnswer = async (req, res) => {
    const { answerId: votableId } = req.body;
    const { vote } = req.body;
    const { id: userId } = req.decoded;
    const votableType = 'answer';

    try {
        await Vote.upsert({
            votableId,
            userId,
            votableType,
            vote
        }, { 
            conflictFields: ['votableId', 'userId'] 
        });
    } catch (error) {
        console.log(error);
        res.status(500).send();
    }

    res.end();
};

module.exports.deleteAnswer = async (req, res) => {
    
};

module.exports.deleteAnswerVote = async (req, res) => {
    
};