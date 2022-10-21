import { createSlice } from '@reduxjs/toolkit';

export const questionsSlice = createSlice({
    name: 'question',
    initialState: {
        questionPost: {votesValue: 0},
        isFetching: false,
        error: null,
    },
    reducers: {
        getQuestionByIdRequest: (state) => {
            state.isFetching = true;
            state.error = null;
        },
        getQuestionByIdSuccess: (state, action) => {
            const { payload } = action;

            state.questionPost = payload;
            state.isFetching = false;
        },
        getQuestionByIdError: (state, action) => {
            const { error } = action.payload;
            
            state.error = error;
            state.isFetching = false;
        },

        voteQuestionRequest: (state) => {
            console.log(typeof (state.questionPost.votesValue), state.questionPost.votesValue);
          
            state.isFetching = true;
            state.error = null;
        },
        voteQuestionSuccess: (state, action) => {
            const { payload: vote } = action;

            console.log(typeof (state.questionPost.votesValue));

            state.questionPost.votesValue += vote;
            state.isFetching = false;
        },
        voteQuestionError: (state, action) => {
            const { error } = action.payload;
            
            state.error = error;
            state.isFetching = false;
        },
    }
});

export const { 
    getQuestionByIdRequest,
    getQuestionByIdSuccess,
    getQuestionByIdError,

    voteQuestionRequest,
    voteQuestionSuccess,
    voteQuestionError,
} = questionsSlice.actions;

export default questionsSlice.reducer;