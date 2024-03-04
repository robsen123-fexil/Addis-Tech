import React from "react";
import ReactDOM from "react-dom"; // Correct import statement
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";

import createSagaMiddleware from "redux-saga";

import { configureStore } from "@reduxjs/toolkit";

import songSaga from "./songSaga";
import songsReducer from "./songState";

const saga = createSagaMiddleware();

const store = configureStore({
  reducer: {
    songs: songsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(saga),
});

saga.run(songSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
