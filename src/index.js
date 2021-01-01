import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import firebase from "firebase";

firebase.initializeApp({
  apiKey: "AIzaSyDFWMXfzYLTe0eM7d0jgKAiCbL7qhQL8tw",
  authDomain: "evernote-clone-76e51.firebaseapp.com",
  projectId: "evernote-clone-76e51",
  storageBucket: "evernote-clone-76e51.appspot.com",
  messagingSenderId: "124891248041",
  appId: "1:124891248041:web:b53fe0fe45b4aac70940b8",
  measurementId: "G-P2JJC17SJF",
});

firebase.analytics();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("evernote-container")
);

reportWebVitals();
