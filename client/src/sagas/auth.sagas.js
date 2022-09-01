import { call, put } from "@redux-saga/core/effects";
import * as api from '../api';
import { 
    signUpSuccess,
    signUpError,
    logInSuccess,
    logInError,
    getMyProfileSuccess,
    getMyProfileError
} from '../slices/auth.slice.js';

function* logInUser(action) {
    const { payload } = action;

    try {
        const userData = yield call(api.logInUser, payload);
        
        yield put(logInSuccess(userData.data));
    } catch (error) {
        yield put(logInError("Can't log in"));
    }
};

function* signUpUser(action) {
    const { payload } = action;

    try {
        const userData = yield call(api.signUpUser, payload);

        yield put(signUpSuccess(userData.data));
    } catch (error) {
        yield put(signUpError("Can't sign up"));
    }
};

function* getUserProfile() {
    try {
        const userData = yield call(api.getUserProfile);
        
        console.log('userData', userData)

        yield put(getMyProfileSuccess(userData.data));
    } catch (error) {
        yield put(getMyProfileError("Can't get profile"));
    }
};

export { logInUser, signUpUser, getUserProfile };