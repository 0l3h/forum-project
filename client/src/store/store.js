import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from '@redux-saga/core';
import rootReducer from '../slices';
import rootSaga from '../sagas/index.js';

const sagaMiddleware = createSagaMiddleware();

export default configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => {
        return getDefaultMiddleware().concat(sagaMiddleware)
    },
});

sagaMiddleware.run(rootSaga);