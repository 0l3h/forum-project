import { call, put } from "@redux-saga/core/effects";
import * as api from '../api';
import { getPopularQuestionsSuccess, getPopularQuestionsError } from '../slices/popularQuestions.slice.js';

function* getPopularQuestions() {
    try {
        const popularQuestions = JSON.parse((yield call(api.getPopularQuestions)).data);

        yield put(getPopularQuestionsSuccess(popularQuestions));
    } catch (error) {
        console.log(error.message);
        yield put(getPopularQuestionsError(error.message));
    }
}

export { getPopularQuestions };