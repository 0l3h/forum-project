import { call, put } from "@redux-saga/core/effects";
import * as api from "../api";
import { getUsersSuccess, getUsersError } from "../slices/users.slice";

function* getUsers() {
    try {
        const users = yield call(api.getUsers);
        
        yield put(getUsersSuccess(users.data));
    } catch (error) {
        yield put(getUsersError(error));
    }    
};

export { getUsers };