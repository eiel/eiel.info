import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import firebase from 'firebase/app';
import {} from 'firebase/auth';
let config = {
    apiKey: "AIzaSyDpbq9hDmGyrzYJcGlvwrjJXL-01No3XNA",
    authDomain: "eiel-91077.firebaseapp.com",
    databaseURL: "https://eiel-91077.firebaseio.com",
    storageBucket: "eiel-91077.appspot.com",
    messagingSenderId: "356361494886"
};
let app = firebase.initializeApp(config);

let provider = new firebase.auth.GoogleAuthProvider();

let authGoogle = () => {
    firebase.auth().signInWithPopup(provider).then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        let token = result.credential.accessToken;
        // The signed-in user info.
        let user = result.user;
        // ...
    }).catch(function(error) {
        // Handle Errors here.
        let errorCode = error.code;
        let errorMessage = error.message;
        // The email of the user's account used.
        let email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        let credential = error.credential;
        // ...
    });
};

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        // User is signed in.
        console.log(user);
    } else {
        authGoogle();
        // No user is signed in.
    }
});

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
