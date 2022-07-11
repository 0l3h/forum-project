import { configureStore } from '@reduxjs/toolkit';
import questionsReducer from '../slices/questionsSlice.js';

export default configureStore({
    reducer: {
        questions: questionsReducer,
    },
});