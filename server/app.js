require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.disable('x-powered-by');

app.use(cors());

app.get('/questions', (req, res) => {
    res.type('text/plain');
    res.send('questions get');
});

app.post('/ask-question', (req, res) => {
    console.log('post');
    res.end();
});

app.listen(port, () => {
    console.log(`Server is listening on port: ${port}`);
});