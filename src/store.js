import { createStore } from 'redux';
import rootReducer from './__reducers';

// ---------------------
import { applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
const loggerMiddleware = createLogger();

export const store = createStore(
    rootReducer,

    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
    )
);