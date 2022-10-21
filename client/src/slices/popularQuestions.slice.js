import { createSlice } from "@reduxjs/toolkit";

export const popularQuestionsSlice = createSlice({
    name: 'popularQuestions',
    initialState: {
        data: [],
        isFetching: false,
        error: null
    },
    reducers: {
        getPopularQuestionsRequest: (state) => {
            state.isFetching = true;
            state.error = null;
        },
        getPopularQuestionsSuccess: (state, action) => {
            const { payload } = action;

            state.data = payload;
            state.isFetching = false;
        },
        getPopularQuestionsError: (state, action) => {
            const { error } = action.payload;

            state.error = error;
            state.isFetching = false;
        }
    }
});

export const {
    getPopularQuestionsRequest,
    getPopularQuestionsSuccess,
    getPopularQuestionsError
} = popularQuestionsSlice.actions;

export default popularQuestionsSlice.reducer;