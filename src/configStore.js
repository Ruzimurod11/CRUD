import { legacy_createStore as createStore } from "redux";
// so it's better to use redux core package if you
// are learning for
// import {composeWithDevTools}
import logger from "redux-logger";
import { applyMiddleware } from "redux";
import rootReducer from "./reducers";

export const store = createStore(rootReducer, applyMiddleware(logger));

export default store;
