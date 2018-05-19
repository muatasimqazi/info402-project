import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import firebase from 'firebase/app';

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyB6v8XfyE1wY5pGLCSjKoRTrllQbdDQi6E",
    authDomain: "info402-43e56.firebaseapp.com",
    databaseURL: "https://info402-43e56.firebaseio.com",
    projectId: "info402-43e56",
    storageBucket: "info402-43e56.appspot.com",
    messagingSenderId: "998280105412"
  };
  firebase.initializeApp(config);

  ReactDOM.render(<App />, document.getElementById('root'));
  registerServiceWorker();
