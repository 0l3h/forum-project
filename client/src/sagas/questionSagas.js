import { call, put } from "@redux-saga/core/effects";
import * as api from '../api';
import { createQuestionError, createQuestionSuccess } from "../slices/questionsSlice";

export function* createQuestion(action) {
    const { payload } = action;

    try {
        yield call(api.createQuestion, [ payload ]);
        
        yield put(createQuestionSuccess(payload));
    } catch (error) {
        yield put(createQuestionError(error.message));
    }
}