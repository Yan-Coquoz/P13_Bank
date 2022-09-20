// @ts-nocheck
import { applyMiddleware, compose, legacy_createStore } from "redux";
import reducer from "../reducer";
import user from "../middlewares/index";

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const enhancers = composeEnhancers(applyMiddleware(user));

const store = legacy_createStore(reducer, enhancers);

export default store;

//https://github.com/reduxjs/redux-devtools/blob/main/docs/Walkthrough.md#manual-integration
