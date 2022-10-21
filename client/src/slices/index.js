import { combineReducers } from 'redux';
import question from './question.slice';
import questions from './questions.slice';
import popularQuestions from './popularQuestions.slice';
import answers from './answers.slice'
import user from './user.slice';

const rootReducer = combineReducers({ question, questions, user, answers, popularQuestions })

export default rootReducer;