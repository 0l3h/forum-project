import { takeLatest } from 'redux-saga/effects';

// Redux methods

import { createQuestionRequest, getQuestionsRequest, deleteQuestionByIdRequest } from '../slices/questions.slice.js';
import { getQuestionByIdRequest, voteQuestionRequest } from '../slices/question.slice.js';
import { createAnswerRequest } from '../slices/answers.slice.js';
import { getPopularQuestionsRequest } from '../slices/popularQuestions.slice.js';
import { signUpRequest, logInRequest, getMyProfileRequest, updateMyProfileRequest, logOutRequest } from '../slices/user.slice.js';
import { getUsersRequest } from '../slices/users.slice.js';

// Redux Saga methods

import { signUpUser, logInUser, logOutUser, getUserProfile, updateUserProfile } from './user.sagas.js';
import { createQuestion, deleteQuestionById, getQuestionById, getQuestions, voteQuestion } from './questions.sagas.js';
import { createAnswer } from './answers.sagas.js';
import { getUsers } from './users.sagas.js';
import { getPopularQuestions } from './popularQuestions.sagas.js';

function* rootSaga() {
    yield takeLatest(createQuestionRequest.type, createQuestion);
    yield takeLatest(getQuestionsRequest.type, getQuestions);
    yield takeLatest(getQuestionByIdRequest.type, getQuestionById);
    yield takeLatest(getPopularQuestionsRequest.type, getPopularQuestions);
    yield takeLatest(voteQuestionRequest.type, voteQuestion);
    yield takeLatest(deleteQuestionByIdRequest.type, deleteQuestionById);
    yield takeLatest(createAnswerRequest.type, createAnswer);
    yield takeLatest(getUsersRequest.type, getUsers);
    yield takeLatest(signUpRequest.type, signUpUser);
    yield takeLatest(logInRequest.type, logInUser);
    yield takeLatest(logOutRequest.type, logOutUser);
    yield takeLatest(getMyProfileRequest.type, getUserProfile);
    yield takeLatest(updateMyProfileRequest.type, updateUserProfile);
}

export default rootSaga;