import { takeLatest } from 'redux-saga/effects';

// Redux methods

import { createQuestionRequest, getQuestionsRequest, deleteQuestionByIdRequest } from '../slices/questions.slice.js';
import { getQuestionByIdRequest } from '../slices/question.slice.js';
import { signUpRequest, logInRequest, getMyProfileRequest } from '../slices/auth.slice.js';

// Redux Saga methods

import { signUpUser, logInUser, getUserProfile } from './auth.sagas.js';
import { createQuestion, deleteQuestionById, getQuestionById, getQuestions } from './questions.sagas.js';

function* rootSaga() {
    yield takeLatest(createQuestionRequest.type, createQuestion);
    yield takeLatest(getQuestionsRequest.type, getQuestions);
    yield takeLatest(getQuestionByIdRequest.type, getQuestionById);
    yield takeLatest(deleteQuestionByIdRequest.type, deleteQuestionById);
    
    yield takeLatest(signUpRequest.type, signUpUser);
    yield takeLatest(logInRequest.type, logInUser);
    yield takeLatest(getMyProfileRequest.type, getUserProfile)
}

export default rootSaga;