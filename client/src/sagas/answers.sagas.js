import { call, put } from "@redux-saga/core/effects";
import * as api from '../api';
import { createAnswerSuccess, createAnswerError } from './../slices/answers.slice.js';

function* createAnswer(action) {
    const { payload } = action;

    try {
        yield call(api.createAnswer, payload);

        yield put(createAnswerSuccess(payload));
    } catch (error) {
        console.log(error.message);
        yield put(createAnswerError(error.message));
    }
};

export { createAnswer };