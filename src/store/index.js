// @ts-nocheck
import { applyMiddleware, compose, legacy_createStore } from "redux";

import reducer from "../reducer";

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const enhancers = composeEnhancers(applyMiddleware());

const store = legacy_createStore(reducer, enhancers);
export default store;
