import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Route, BrowserRouter as Router } from "react-router-dom";
import LoginComponent from "./login/login";
import SignupComponent from "./signup/signup";
import DashboardComponent from "./dashboard/dashboard";
import * as serviceWorker from "./serviceWorker";

const firebase = require("firebase");
require("firebase/firestore");

firebase.initializeApp({
  apiKey: "AIzaSyCEjvgl6Ag2NF4D-YimnBQyxvlPIYQ3k64",
  authDomain: "chatapp-5ad8d.firebaseapp.com",
  databaseURL: "https://chatapp-5ad8d.firebaseio.com",
  projectId: "chatapp-5ad8d",
  storageBucket: "chatapp-5ad8d.appspot.com",
  messagingSenderId: "299782161058",
  appId: "1:299782161058:web:3afb03e98dfe3438"
});

const routing = (
  <Router>
    <div id="routing-container">
      <Route path="/login" component={LoginComponent} />
      <Route path="/signup" component={SignupComponent} />
      <Route path="/dashboard" component={DashboardComponent} />
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
