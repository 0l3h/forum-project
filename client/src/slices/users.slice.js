import { createSlice } from "@reduxjs/toolkit";

const users = createSlice({
    name: 'users',
    initialState: {
        usersData: [],
        isFetching: false,
        error: null
    },
    reducers: {
        getUsersRequest: (state) => {
            state.isFetching = true;
            state.error = null;
        },
        getUsersSuccess: (state, action) => {
            const { payload } = action

            state.usersData = payload;
            state.isFetching = false;
        },
        getUsersError: (state, action) => {
            const { payload: { error } } = action;

            state.isFetching = false;
            state.error = error;
        },
    },
});

export const {
    getUsersRequest,
    getUsersSuccess,
    getUsersError
} = users.actions;

export default users.reducer;