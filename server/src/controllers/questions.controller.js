const Sequelize = require("sequelize");
const { Question, Answer, User, Vote, sequelize } = require('../models');

module.exports.createQuestion = async (req, res) => {
    const { decoded: { id: authorId }, body: { title, questionBody } } = req;

    try {
        await Question.create({
            title, 
            questionBody,
            authorId
        });

        res.end();
    } catch (error) {
        console.log(error.message);
        res.status(500).send();
    }
};

module.exports.deleteQuestionById = async (req, res) => {
    const { body: { id } } = req;
    
    try {
        
        res.end();
    } catch (error) {
        console.log(error.message);
        res.status(500).send();
    }
}

module.exports.getPopularQuestions = async (req, res) => {
    try {
        const popularQuestions = (await Question.findAll({
            include: [
                {
                    model: Answer,
                    as: 'answers',
                    required: true,
                    attributes: []
                }
            ],
            attributes: { 
                include: [
                    [ Sequelize.fn('COUNT', Sequelize.col('"answers"."id"')), "answersAmount" ],
                ],
                exclude: ['questionBody', 'createdAt', 'updatedAt', 'authorId']
            },
            order: [[sequelize.literal('"answersAmount"'), 'DESC']],
            group: ['Question.id']
        })).map((question) => question.get({ plain: true }));

        res.json(JSON.stringify(popularQuestions));
    } catch (error) {
        console.log(error.message);
        res.status(500).send();
    }    
};

module.exports.getQuestionById = async (req, res) => {
    const { params: { id } } = req;

    try {
        const question = await (await Question.findOne({
            where: { id },
            include: [
                {
                    model: User,
                    as: 'user',
                    attributes: ['username', 'profilePictureUrl'],
                },
                { 
                    model: Answer, 
                    as: 'answers',
                    include: {
                        model: User,
                        as: 'user',
                        attributes: ['username', 'profilePictureUrl']
                    }
                },
                {
                    model: Vote,
                    as: 'votes',
                    attributes: [],
                },
            ],
            attributes: {
                include: [[sequelize.fn('SUM', sequelize.cast(sequelize.col('"votes"."vote"'), 'integer')), 'votesValue']]
            },
            group: ['user.id', 'Question.id', 'user.username', 'answers.id', 'answers->user.id', 'user.profilePictureUrl'],
            exclude: ['updatedAt'],
            nest: true
        })).increment('views_amount');

        const questionObject = question.get({ plain: true });

        res.json(JSON.stringify(questionObject));
    } catch (error) {
        console.log(error.message);
        res.status(500).send();
    }
};

module.exports.getQuestions = async (req, res) => {
    try {
        const questions = await Question.findAll({
            attributes: {
                exclude: ['questionBody', 'updatedAt', 'authorId'],
            },
            raw: true,
            nest: true,
            include: [
                {
                    model: User,
                    as: 'user',
                    attributes: ['username', 'profilePictureUrl']
                },
                {
                    model: Vote,
                    as: 'votes',
                    attributes: [],
                }
            ],
            attributes: {
                include: [[sequelize.fn('SUM', sequelize.col('"votes"."vote"')), 'votesValue']]
            },
            group: ['Question.id', 'user.username', 'user.profilePictureUrl'],
            order: [[sequelize.literal('"createdAt"'), 'DESC']],
        });

        res.json(JSON.stringify(questions));
    } catch (error) {
        console.log(error.message);
        res.status(500).send();
    }
};

module.exports.voteQuestion = async (req, res) => {
    const { id: postId } = req.params;
    const { vote } = req.body;
    const { id: userId } = req.decoded;

    try {
        await Vote.create({
            postId,
            userId,
            vote
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).send();
    }

    res.end();
};