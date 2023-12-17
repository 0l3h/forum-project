require('dotenv').config({ path: __dirname + '/../../.env' });

const path = require('path');
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const { 
    getQuestions, 
    createQuestion, 
    getQuestionById, 
    getPopularQuestions, 
    voteQuestion, 
    deleteQuestionVote } = require('./controllers/questions.controller');

const { 
    createAnswer, 
    voteAnswer,
    deleteAnswerVote
} = require('./controllers/answers.controller'); 

const { getUsers } = require('./controllers/user.controller');

const { 
    signup, 
    login, 
    auth, 
    getMyProfile, 
    updateMyProfile, 
    logout 
} = require('./controllers/auth.controller');

const { Client } = require('pg');
const client = new Client()

async function initializeDb() {
    try {
        client.connect()        
        await client.query('CREATE DATABASE IF NOTE EXISTS $1::text;', [process.env.POSTGRES_DB_NAME || "askme_db"])
    } catch (err) {
        console.error(err);
    }
};

initializeDb();

const app = express();
const port = process.env.PORT || 5000;

app.disable('x-powered-by');

app.use(cors({ 
    credentials: true, 
    origin: process.env.NODE_ENV === 'production'? 'https://forum-project-production-bca8.up.railway.app/' : 'http://localhost:3000'
}));

app.use(express.json({ limit: "10mb" }));

app.use(cookieParser());

if(process.env.NODE_ENV === 'production')
    app.use(express.static(path.join(__dirname, '../../client/build')));

app.get('/browse-questions', getQuestions);
app.get('/browse-questions/:id', getQuestionById);
app.get('/view-profile', auth, getMyProfile);
app.get('/users', getUsers);
app.get('/popular-questions', getPopularQuestions);

app.patch('/browse-questions/:id/vote-question', auth, voteQuestion);
app.patch('/browse-questions/*/vote-answer', auth, voteAnswer);
app.patch('/edit-profile', auth, updateMyProfile);

app.post('/ask-question', auth, createQuestion);
app.post('/browse-questions/:id', auth, createAnswer);
app.post('/sign-up', signup);
app.post('/log-in', login);
app.post('/log-out', logout);

app.delete('/browse-questions/:id/delete-question-vote', auth, deleteQuestionVote);
app.delete('/browse-questions/*/delete-answer-vote', auth, deleteAnswerVote);

app.listen(port, () => {
    console.log(`\nServer is listening on port: ${port}\n`);
});