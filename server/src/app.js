require('dotenv').config({ path: __dirname + '/../../.env' });

const path = require('path');
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const { getQuestions, createQuestion, getQuestionById, getPopularQuestions, voteQuestion } = require('./controllers/questions.controller');
const { createAnswer, voteAnswer } = require('./controllers/answers.controller'); 
const { signup, login, auth, getMyProfile, updateMyProfile, logout } = require('./controllers/auth.controller');

const app = express();
const port = process.env.PORT || 5000;

app.disable('x-powered-by');

app.use(cors({ 
    credentials: true, 
    origin: process.env.NODE_ENV === 'production'? 'https://askme-forum-app.com/' : 'http://localhost:3000'
}));
app.use(express.json({limit: "10mb"}));
app.use(cookieParser());

if(process.env.NODE_ENV === 'production')
    app.use(express.static(path.join(__dirname, '../../client/build')));

app.get('/browse-questions', getQuestions);
app.get('/browse-questions/:id', getQuestionById);
app.get('/view-profile', auth, getMyProfile);
app.get('/popular-questions', getPopularQuestions);
app.post('/browse-questions/:id', auth, createAnswer);
app.patch('/browse-questions/:id/vote-question', auth, voteQuestion);
app.patch('/browse-questions/:id/vote-answer', auth, voteAnswer);
app.post('/ask-question', auth, createQuestion);
app.patch('/edit-profile', auth, updateMyProfile);
app.post('/sign-up', signup);
app.post('/log-in', login);
app.post('/log-out', logout);

app.listen(port, () => {
    console.log(`\nServer is listening on port: ${port}\n`);
});