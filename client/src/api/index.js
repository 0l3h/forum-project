import axios from 'axios';

const host = 'localhost';
const port = 7391;

const config = {
    withCredentials: true,
    baseURL: `http://${host}:${port}`,
};

const instance = axios.create(config);

export const createQuestion = data => {
    const requestConfig = {
        headers: {
            "Content-Type": "application/json" ,
            "Accept": "application/json"
        }
    }; 

    instance.post('ask-question', JSON.stringify(data), requestConfig);
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

export const signUpUser = data => {
    const requestConfig = {
        headers: {
            "Content-Type": "application/json" ,
            "Accept": "application/json"
        }
    }; 

    return instance.post('/sign-up', JSON.stringify(data), requestConfig);
};

export const logInUser = data => {
    const requestConfig = {
        headers: {
            "Content-Type": "application/json" ,
            "Accept": "application/json"
        }
    }; 

    return instance.post('/log-in', JSON.stringify(data), requestConfig);
};

export const getUserProfile = () => {
    const requestConfig = {
        headers: {
            "Accept": "application/json"
        }
    }

    return instance.get('/view-profile', requestConfig);
}