import axios from 'axios';

const host = 'localhost';
const port = 7391;

const config = {
    baseURL: `http://${host}:${port}`,
    headers: {
        'Access-Control-Allow-Origin': "*"
    }
}

const instance = axios.create(config)

export const createQuestion = data => instance.post('ask-question', data);
export const deleteQuestion = () => instance.delete();