import { createSlice } from "@reduxjs/toolkit";

const profileSlice = createSlice({
    name: 'profile',
    initialState: {
        userData: {},
        isFetching: false,
        error: null
    },
    reducers: {
        getProfileRequest: (state) => {
            state.isFetching = true;
            state.error = null;
        },
        getProfileSuccess: (state, action) => {
            const { payload } = action;

            state.payload = payload;
            state.isFetching = false;
        },
        getProfileError: (state, action) => {
            const { payload: { error } } = action;

            state.isFetching = false;
            state.error = error;
        },
    }
});

export const {
    getProfileRequest,
    getProfileSuccess,
    getProfileError
} = profileSlice.actions;

export default profileSlice.reducer;