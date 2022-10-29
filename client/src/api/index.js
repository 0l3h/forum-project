import axios from 'axios';

const host = 'localhost';
const port = process.env.PORT || 7391;

const config = {
    withCredentials: true,
    baseURL: "https://askme-forum-app.herokuapp.com",
    // baseURL: `http://${host}:${port}`,
};

const instance = axios.create(config);

const postConfig = {
    headers: {
        "Content-Type": "application/json" ,
        "Accept": "application/json"
    }
};

const getConfig = {
    headers: {
        "Accept": "application/json"
    }
};

export const createQuestion = data => instance.post('ask-question', JSON.stringify(data), postConfig);

export const getQuestions = () => instance.get('browse-questions', getConfig);

export const getQuestionById = id => instance.get(`/browse-questions/${id}`, getConfig);

export const voteQuestion = (id, vote) => instance.patch(`/browse-questions/${id}/vote-question`, JSON.stringify({vote}), postConfig);

export const voteAnswer = (id, vote) => instance.patch(`/browse-questions/${id}/vote-answer`, JSON.stringify({vote}), postConfig);

export const getPopularQuestions = () => instance.get('/popular-questions', getConfig);

export const createAnswer = data => instance.post(`/browse-questions/${data.questionId}`, JSON.stringify(data), postConfig);

export const signUpUser = data => instance.post('/sign-up', JSON.stringify(data), postConfig);

export const logInUser = data => instance.post('/log-in', JSON.stringify(data), postConfig);

export const getUserProfile = () => instance.get('/view-profile', getConfig);

export const updateUserProfile = data => instance.patch('/edit-profile', JSON.stringify(data), postConfig);