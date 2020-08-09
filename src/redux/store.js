import { applyMiddleware, compose, createStore, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import { promiseMiddleware } from "@adobe/redux-saga-promise";
import { all } from "redux-saga/effects";

import * as insuranceCalculator from "./insuranceCalculator";

const rootReducer = combineReducers({
	insuranceCalculator: insuranceCalculator.reducer
});

export function* rootSaga() {
	yield all([insuranceCalculator.saga()]);
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
	rootReducer,
	composeEnhancers(applyMiddleware(promiseMiddleware, sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

export default store;
