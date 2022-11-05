import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { applyMiddleware, compose } from "redux";
import { configureStore } from '@reduxjs/toolkit'
import thunk from "redux-thunk";
import reducers from "./reducers/index.js";
import App from "./App";
// import "./index.css";

const store = configureStore(reducers, compose(applyMiddleware(thunk)));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
