import { createSlice } from '@reduxjs/toolkit';

export const questionsSlice = createSlice({
    name: 'questions',
    initialState: {
        questionPosts: [],
    },
    reducers: {
        askQuestion: (state, action) => {
            const { questionPosts } = state;
            const { title, questionBody } = action.payload;

            questionPosts.push({id: Math.random(), title, questionBody });
        }
    }
})

export const { askQuestion } = questionsSlice.actions;
export default questionsSlice.reducer;