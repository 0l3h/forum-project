import { createSlice } from "@reduxjs/toolkit";

const answersSlice = createSlice({
    name: 'answers',
    initialState: {
        data: [],
        isFetching: false,
        error: null
    },
    reducers: {
        createAnswerRequest: (state) => {
            state.isFetching = true;
            state.error = null;
        },
        createAnswerSuccess: (state, action) => {
            const { payload } = action;

            state.data.push(payload);
            state.isFetching = false;
        },
        createAnswerError: (state, action) => {
            const { payload: { error } } = action;
            
            state.isFetching = false;
            state.error = error;
        },

        upvoteAnswerRequest: () => {
            state.isFetching = true;
            state.error = null;
        },
        upvoteAnswerSuccess: () => {
            const { payload } = action;

            state.questionPost = { ...questionPost, ...payload };
            state.isFetching = false;
        },
        upvoteAnswerError: (state, action) => {
            const { error } = action.payload;
            
            state.error = error;
            state.isFetching = false;
        },

        downvoteAnswerRequest: () => {
            state.isFetching = true;
            state.error = null;
        },
        downvoteAnswerSuccess: () => {
            const { payload } = action;

            state.questionPost = { ...questionPost, ...payload };
            state.isFetching = false;
        },
        downvoteAnswerError: (state, action) => {
            const { error } = action.payload;
            
            state.error = error;
            state.isFetching = false;
        },
    }
});

export const { 
    createAnswerRequest,
    createAnswerSuccess,
    createAnswerError
} = answersSlice.actions;

export default answersSlice.reducer;