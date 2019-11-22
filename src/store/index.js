import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from "redux-saga"
import root from "./root-saga.js"

import Leagues from './modules/leagues/reducer'
import Teams from './modules/teams/reducer'


const sagaMiddleware = createSagaMiddleware()
const composeEnhancers =
    typeof window === 'object' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        }) : compose;

const enhancer = composeEnhancers(
    applyMiddleware(sagaMiddleware)
);

const reducers = combineReducers({
    Leagues,
    Teams
})

const store = createStore(
    reducers,
    enhancer
);

sagaMiddleware.run(root)

export default store;

