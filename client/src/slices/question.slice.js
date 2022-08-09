import { createSlice } from '@reduxjs/toolkit';

export const questionsSlice = createSlice({
    name: 'question',
    initialState: {
        questionPost: {},
        isFetching: false,
        error: null,
    },
    reducers: {

        // GET QUESTION BY ID

        getQuestionByIdRequest: (state, action) => {
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
    }
});

export const { 
    getQuestionByIdRequest,
    getQuestionByIdSuccess,
    getQuestionByIdError,
} = questionsSlice.actions;

export default questionsSlice.reducer;