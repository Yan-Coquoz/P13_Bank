/* eslint-disable no-undef */
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
// hot reload reducer
if (module.hot) {
  module.hot.accept("../reducer", () => {
    store.replaceReducer(require("../reducer"));
  });
}
export default store;

//https://github.com/reduxjs/redux-devtools/blob/main/docs/Walkthrough.md#manual-integration
