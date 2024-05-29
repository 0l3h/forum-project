import axios from 'axios';

const host = 'localhost';
const port = 5000;
const url = process.env.NODE_ENV === 'production'? "https://forum-project-production-bca8.up.railway.app/" : `http://${host}:${port}`;

console.log(url);

const config = {
    withCredentials: true,
    baseURL: url,
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

export const getQuestions = () => {
    const data = instance.get('browse-questions', getConfig);
    // console.log(data);
    return data;
}

export const getQuestionById = id => instance.get(`/browse-questions/${id}`, getConfig);

export const voteQuestion = (id, vote) => instance.patch(`/browse-questions/${id}/vote-question`, JSON.stringify({vote}), postConfig);

export const voteAnswer = (answerId, vote) => instance.patch(`/browse-questions/*/vote-answer`, JSON.stringify({answerId, vote}), postConfig);

export const getPopularQuestions = () => instance.get('/popular-questions', getConfig);

export const createAnswer = data => instance.post(`/browse-questions/${data.questionId}`, JSON.stringify(data), postConfig);

export const signUp = data => instance.post('/sign-up', JSON.stringify(data), {...postConfig, withCredentials: true });

export const signUpUser = data => fetch('/api/auth/signup', {
    method: "POST",
    credentials: "include",
    headers: { 
        "Accept": "application/json",
        "Content-Type": "application/json",
    },
    body: JSON.stringify(data)
});

export const logInUser = data => instance.post('/log-in', JSON.stringify(data), postConfig);

export const logOutUser = data => instance.post('/log-out');

export const getUserProfile = () => instance.get('/view-profile', getConfig);

export const getUsers = () => instance.get('/users', getConfig);

export const updateUserProfile = data => instance.patch('/edit-profile', JSON.stringify(data), postConfig);