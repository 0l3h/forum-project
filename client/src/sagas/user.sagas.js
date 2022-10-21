import { call, put } from "@redux-saga/core/effects";
import * as api from '../api';
import { 
    signUpSuccess,
    signUpError,
    logInSuccess,
    logInError,
    getMyProfileSuccess,
    getMyProfileError,
    updateMyProfileError,
    updateMyProfileSuccess
} from '../slices/user.slice.js';

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

        yield put(getMyProfileSuccess(userData.data));
    } catch (error) {
        yield put(getMyProfileError("Can't get profile"));
    }
};

function* updateUserProfile(action) {
    const { payload } = action;
    
    try {
        const newUserData = yield call(api.updateUserProfile, payload);
        
        yield put(updateMyProfileSuccess(newUserData.data));
    } catch (error) {
        yield put(updateMyProfileError("Cannot update profile"))
    }
}

export { logInUser, signUpUser, getUserProfile, updateUserProfile };