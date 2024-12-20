const { Answer, Vote } = require('../models');

module.exports.createAnswer = async (req, res) => {
    const { id: questionId } = req.params;
    // const { decoded: { id: authorId }, body: { answer: answerBody } } = req;
    console.log(req.body);

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

        const votesValue = await Vote.sum('vote', { 
            where: {
                votableId
            }
        });

        res.json({ votesValue });
    } catch (error) {
        console.log(error.message);
        res.status(500).send();
    }
};

module.exports.deleteAnswer = async (req, res) => {
    
};

module.exports.deleteAnswerVote = async (req, res) => {
    
};