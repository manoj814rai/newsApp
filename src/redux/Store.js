import { configureStore } from '@reduxjs/toolkit';
import { rootReducers } from './RootReducers';
import createSagaMiddleware from 'redux-saga'
import saga from './saga/Sagas';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: rootReducers,
    middleware: [sagaMiddleware],
});

sagaMiddleware.run(saga);