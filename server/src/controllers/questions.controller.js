const { Question } = require('../models');

module.exports.createQuestion = async (req, res) => {
    console.log(req);
    const { decoded: { id: authorId }, body: { id, title, questionBody } } = req;

    try {
        await Question.create({
            id, 
            title, 
            questionBody,
            authorId
        });

        res.end();
    } catch (error) {
        console.log(error);
        res.status(500).send();
    }
};

module.exports.deleteQuestionById = async (req, res) => {
    const { body: { id } } = req;
    
    try {
        
        res.end();
    } catch (error) {
        console.log(error);
        res.status(500).send();
    }
}

module.exports.editQuestionById = async (req, res) => {
    const { body: { id } } = req;
    
    try {

        res.end();
    } catch (error) {
        console.log(error);
        res.status(500).send();
    }
}

module.exports.getQuestionById = async (req, res) => {
    const { params: { id } } = req;

    console.log(id);

    try {
        const question = await Question.findByPk(id);
        const updatedQuestion = await question.increment('views_amount');

        res.json(JSON.stringify(updatedQuestion));
    } catch (error) {
        console.log(error);
        res.status(500).send();
    }
}

module.exports.getQuestions = async (req, res) => {
    try {
        const questions = await Question.findAll();

        res.json(JSON.stringify(questions));
    } catch (error) {

        console.log(error);
        res.status(500).send();
    }
};