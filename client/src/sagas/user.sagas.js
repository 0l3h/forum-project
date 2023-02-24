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
    updateMyProfileSuccess,
    logOutSuccess
} from '../slices/user.slice.js';

function* logInUser(action) {
    const { payload } = action;

    try {
        const response = yield call(api.logInUser, payload);

        if (response.data.errorMessage) 
            yield put(logInError(response.data.errorMessage));
        else 
            yield put(logInSuccess(response.data));
    
    } catch (error) {
        yield put(logInError("Can't log in"));
    }
};

function* logOutUser() {
    try {
        yield call(api.logOutUser);
        yield put(logOutSuccess());
    } catch (error) {
        yield put(logOutError("Can't log out"));
    }
}

function* signUpUser(action) {
    const { payload } = action;

    try {
        const response = yield call(api.signUpUser, payload);

        if (response.data.errorMessage) 
            yield put(signUpError(response.data.errorMessage));
        else 
            yield put(signUpSuccess(response.data));

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

export { logInUser, signUpUser, logOutUser, getUserProfile, updateUserProfile };