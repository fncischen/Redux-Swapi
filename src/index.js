import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { createStore } from "redux";
import charReducer from "./reducers";
// needed dependancies

import { applyMiddleware} from 'redux';
// applyMiddleware from redux

import thunk from 'redux-thunk';
// thunk from redux-thunk

import logger from 'redux-logger';
// logger from redux-logger


const store = createStore(
  charReducer,
  applyMiddleware(thunk, logger),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
