import axios from 'axios';

const host = 'localhost';
const port = 7391;

const config = {
    baseURL: `http://${host}:${port}`,
};

const instance = axios.create(config);

export const createQuestion = data => {
    instance.post('ask-question', JSON.stringify(data), {
        headers: { 
            "Content-Type": "application/json" ,
            "Accept": "application/json"
        }
    });
};

export const getQuestions = () => {
    const requestConfig = {
        headers: { 
            "Accept": "application/json"
        }
    }

    return instance.get('browse-questions', requestConfig);
};

export const getQuestionById = (id) => {
    const requestConfig = {
        headers: {
            "Accept": "application/json",
        }
    };

    return instance.get(`/browse-questions/${id}`, requestConfig);
};

export const deleteQuestionById = () => {
    instance.delete();
};

export const editQuestionById = () => {
    instance.patch();
};