import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import reducer from "./reducers";
import rootSaga from "./sagas";
import { AnyAction, Store } from "@reduxjs/toolkit";

const sagaMiddleware = createSagaMiddleware();
const store: Store = createStore(
  reducer,
  compose(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(rootSaga);

export default store;
