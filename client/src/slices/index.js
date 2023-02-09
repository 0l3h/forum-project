import { combineReducers } from 'redux';
import question from './question.slice';
import questions from './questions.slice';
import popularQuestions from './popularQuestions.slice';
import users from './users.slice';
import user from './user.slice';

const rootReducer = combineReducers({ 
    question, 
    questions, 
    user, 
    popularQuestions,
    users
});

export default rootReducer;