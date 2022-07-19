import { v4 as uuidv4 } from 'uuid';
import { createSlice } from '@reduxjs/toolkit';

export const questionsSlice = createSlice({
    name: 'questions',
    initialState: {
        questionPosts: [],
        isFetching: false,
        error: null,
    },
    reducers: {
        createQuestionRequest: (state) => {
            state.isFetching = true;
            state.error = null;
        },
        createQuestionSuccess: (state, action) => {
            const { questionPosts } = state;
            const { title, questionBody } = action.payload;

            console.log(action.payload);

            questionPosts.push({id: uuidv4(), title, questionBody });
        },
        createQuestionError: (state, action) => {
            const { error } = action.payload;
            
            state.error = error;
            state.isFetching = false;
        }
    }
});

export const { createQuestionRequest } = questionsSlice.actions;
export const { createQuestionSuccess } = questionsSlice.actions;
export const { createQuestionError } = questionsSlice.actions;

export default questionsSlice.reducer;