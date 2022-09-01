import { createSlice } from '@reduxjs/toolkit';

export const questionsSlice = createSlice({
    name: 'questions',
    initialState: {
        questionPosts: [],
        isFetching: false,
        error: null,
    },
    reducers: {

        // CREATE A QUESTION

        createQuestionRequest: (state) => {
            state.isFetching = true;
            state.error = null;
        },
        createQuestionSuccess: (state) => {
            state.isFetching = false;
        },
        createQuestionError: (state, action) => {
            const { error } = action.payload;
            
            state.error = error;
            state.isFetching = false;
        },

        // GET QUESTIONS

        getQuestionsRequest: (state) => {
            state.isFetching = true;
            state.error = null;
        },
        getQuestionsSuccess: (state, action) => {
            const { payload } = action;

            state.questionPosts = payload;
            state.isFetching = false;
        },
        getQuestionsError: (state, action) => {
            const { error } = action.payload;

            state.error = error;
            state.isFetching = false;
        },

        // DELETE QUESTION BY ID

        deleteQuestionByIdRequest: (state) => {
            state.isFetching = true;
            state.error = null;
        },
        deleteQuestionByIdSuccess: (state) => {
            state.isFetching = false;
        },
        deleteQuestionByIdError: (state, action) => {
            const { error } = action.payload;
            
            state.error = error;
            state.isFetching = false;
        },
    }
});

export const { 
    createQuestionRequest, 
    createQuestionSuccess,
    createQuestionError,

    getQuestionsRequest,
    getQuestionsSuccess,
    getQuestionsError,

    deleteQuestionByIdRequest,
    deleteQuestionByIdSuccess,
    deleteQuestionByIdError
} = questionsSlice.actions;

export default questionsSlice.reducer;