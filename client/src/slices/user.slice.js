import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        userData: {},
        isFetching: false,
        error: null,
    },
    reducers: {
        // LOG IN A USER 
        
        logInRequest: (state) => {
            state.isFetching = true;
            state.error = null;
        },
        logInSuccess: (state, action) => {
            const { payload } = action;

            state.userData = payload;
            state.isFetching = false;
        },
        logInError: (state, action) => {
            const { payload: { error } } = action;
            
            state.isFetching = false;
            state.error = error;
        },

        // LOG OUT

        logOutRequest: (state) => {
            state.isFetching = true;
            state.error = null;
        },
        logOutSuccess: (state) => {
            state.userData = {};
            state.isFetching = false;
        },
        logOutError: (state) => {
            const { payload: { error } } = action;
            
            state.isFetching = false;
            state.error = error;
        },

        // REGISTER A USER

        signUpRequest: (state) => {
            state.isFetching = true;
            state.error = null;
        },
        signUpSuccess: (state, action) => {
            const { payload } = action;

            state.userData = payload;
            state.isFetching = false;
        },
        signUpError: (state, action) => {
            const { payload: { error } } = action;
            
            state.isFetching = false;
            state.error = error;
        },

        // GET USER'S DATA

        getMyProfileRequest: (state) => {
            state.isFetching = true;
            state.error = null;
        },
        getMyProfileSuccess: (state, action) => {
            const { payload } = action;

            state.userData = payload;
            state.isFetching = false;
        },
        getMyProfileError: (state, action) => {
            const { payload: { error } } = action;

            state.isFetching = false;
            state.error = error;
        },

        // UPDATE USER'S DATA

        updateMyProfileRequest: (state) => {
            state.isFetching = true;
            state.error = null;
        },
        updateMyProfileSuccess: (state, action) => {
            const { payload } = action;

            state.userData = payload;
            state.isFetching = false;
        },
        updateMyProfileError: (state, action) => {
            const { payload: { error } } = action;

            state.isFetching = false;
            state.error = error;
        }
    }
})

export const { 
    logInRequest,
    logInSuccess,
    logInError,

    signUpRequest,
    signUpSuccess,
    signUpError,

    getMyProfileRequest,
    getMyProfileSuccess,
    getMyProfileError,

    updateMyProfileRequest,
    updateMyProfileSuccess,
    updateMyProfileError
} = userSlice.actions;

export default userSlice.reducer;