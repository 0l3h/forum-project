require('dotenv').config();

const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const { getQuestions, createQuestion, getQuestionById } = require('./controllers/questions.controller');
const { signup, login, auth, getMyProfile } = require('./controllers/auth.controller');
// const { getProfile } = require('./controllers/user.controller');

const app = express();
const port = process.env.PORT || 5000;

app.disable('x-powered-by');

app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
app.use(express.json());
app.use(cookieParser());

app.get('/browse-questions', getQuestions);
app.get('/browse-questions/:id', getQuestionById);
app.post('/ask-question', auth, createQuestion);
app.get('/view-profile', auth, getMyProfile);
// app.get('/search-users/:id', getProfile);
app.post('/sign-up', signup);
app.post('/log-in', login);

app.listen(port, () => {
    console.log(`Server is listening on port: ${port}`);
});