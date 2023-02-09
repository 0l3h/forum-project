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
            state.isFetching = true;
            state.error = null;
        },
        voteQuestionSuccess: (state, action) => {
            const { payload: vote } = action;

            state.questionPost.votesValue += vote;
            state.isFetching = false;
        },
        voteQuestionError: (state, action) => {
            const { error } = action.payload;
            
            state.error = error;
            state.isFetching = false;
        },
        
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

        voteAnswerRequest: (state) => {
            state.isFetching = true;
            state.error = null;
        },
        voteAnswerSuccess: (state, action) => {
            const { payload: { answerId, vote } } = action;

            const [answer] = state.questionPost.answers.filter(answer => {
                return answer.id === answerId;
            });

            answer.votesValue += vote;
            state.isFetching = false;
        },
        voteAnswerError: (state, action) => {
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

    createAnswerRequest,
    createAnswerSuccess,
    createAnswerError,
    
    voteAnswerRequest,
    voteAnswerSuccess,
    voteAnswerError
} = questionsSlice.actions;

export default questionsSlice.reducer;