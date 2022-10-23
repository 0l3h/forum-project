require('dotenv').config({ path: '../.env' });

const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const path = require('path');

const { getQuestions, createQuestion, getQuestionById, getPopularQuestions, voteQuestion } = require('./controllers/questions.controller');
const { createAnswer, voteAnswer } = require('./controllers/answers.controller'); 
const { signup, login, auth, getMyProfile, updateMyProfile } = require('./controllers/auth.controller');

const app = express();
const port = process.env.PORT || 5000;

app.disable('x-powered-by');

app.use(cors({ 
    credentials: true, 
    origin: 'http://localhost:3000' 
    // origin: 'https://askme-forum-app.herokuapp.com/' 
}));
app.use(express.json({limit: "10mb"}));
app.use(express.static(path.join(__dirname, '../../client/build')));
app.use(cookieParser());

app.get('/browse-questions', getQuestions);
app.get('/browse-questions/:id', getQuestionById);
app.get('/view-profile', auth, getMyProfile);
app.get('*', getPopularQuestions);
app.post('/browse-questions/:id', auth, createAnswer);
app.patch('/browse-questions/:id/vote-question', auth, voteQuestion);
app.patch('/browse-questions/:id/vote-answer', auth, voteAnswer);
app.post('/ask-question', auth, createQuestion);
app.patch('/edit-profile', auth, updateMyProfile);
app.post('/sign-up', signup);
app.post('/log-in', login);

app.listen(port, () => {
    console.log(`Server is listening on port: ${port}`);
});