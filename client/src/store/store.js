import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from '@redux-saga/core';
import questionsReducer from '../slices/questionsSlice.js';
import rootSaga from '../sagas/index.js';

const sagaMiddleware = createSagaMiddleware();

export default configureStore({
    reducer: {
        questions: questionsReducer,
    },
    middleware: getDefaultMiddleware => {
        return getDefaultMiddleware().concat(sagaMiddleware)
    },
});

sagaMiddleware.run(rootSaga);