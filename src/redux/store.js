import { compose, createStore, combineReducers } from "redux";

import * as insuranceCalculator from "./insuranceCalculator";

const rootReducer = combineReducers({
	insurance_calculator: insuranceCalculator.reducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers());

export default store;
