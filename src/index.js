import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
// import axios from 'axios'

import { BrowserRouter as Router } from "react-router-dom";
import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import appState from "./store/reducers/appStateReducer"
import config from "./store/reducers/configReducers";
import auth from "./store/reducers/authReducers";

// Settings auth defaults
// axios.defaults.baseURL = 'https://mbk-backend-path.com/'
// axios.defaults.headers.common['Authorization'] = 'Auth token'
// axios.defaults.headers.post['Content-Type'] = 'application/json'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = combineReducers({
  appState,
  config,
  auth
});

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

const configuredApp = (
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);

ReactDOM.render(configuredApp, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
