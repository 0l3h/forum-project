const questionsRouter = require('express').Router();
const { getAnswers } = require('./controllers/answers.controller');
const { getQuestionById } = require('./controllers/questions.controller');

questionsRouter.route('/').get();

questionsRouter.route('/browse-questions/:id')
    .get(getQuestionById)
    .get(getAnswers);