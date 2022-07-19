import { takeLatest } from 'redux-saga/effects';
import { createQuestionRequest } from '../slices/questionsSlice.js';
import { createQuestion } from './questionSagas.js';

function* rootSaga() {
    yield takeLatest(createQuestionRequest.type, createQuestion);
    
}

export default rootSaga;