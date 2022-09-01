import { combineReducers } from 'redux';
import question from './question.slice';
import questions from './questions.slice';
import auth from './auth.slice';

const rootReducer = combineReducers({ question, questions, auth })

export default rootReducer;