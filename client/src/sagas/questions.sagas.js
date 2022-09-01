import { call, put } from "@redux-saga/core/effects";
import * as api from '../api';

import { 
    createQuestionSuccess, 
    createQuestionError, 

    getQuestionsSuccess,
    getQuestionsError,
} from "../slices/questions.slice";

import {
    getQuestionByIdSuccess,
    getQuestionByIdError,
} from "../slices/question.slice";

// CREATE A QUESTION 

function* createQuestion(action) {
    const { payload } = action;

    try {
        yield call(api.createQuestion, payload);
        
        yield put(createQuestionSuccess(payload));
    } catch (error) {
        yield put(createQuestionError(error.message));
    }
}

// GET ALL QUESTIONS 

function* getQuestions() {
    try {
        const posts = yield call(api.getQuestions);
        const parsedPosts = JSON.parse(posts.data);

        yield put(getQuestionsSuccess(parsedPosts));
    } catch (error) {
        yield put(getQuestionsError(error.message));
    }
}

// GET QUESTION BY ID 

function* getQuestionById(action) {
    const { payload: id } = action;

    console.log(action)

    try {
        const question = yield call(api.getQuestionById, id);
        const parsedQuestion = JSON.parse(question.data);

        console.log(parsedQuestion)

        yield put(getQuestionByIdSuccess(parsedQuestion));
    } catch (error) {
        yield put(getQuestionByIdError(error.message));
    }
}

// DELETE QUESTION BY ID 

function* deleteQuestionById(action) {
    const { payload } = action;

    try {
        yield call(api.createQuestion, payload);
        
        yield put(createQuestionSuccess(payload));
    } catch (error) {
        yield put(createQuestionError(error.message));
    }
}

export {
    createQuestion, 
    getQuestions, 
    getQuestionById, 
    deleteQuestionById 
};