import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';

import {} from './firebaseInit'
import firebase from 'firebase/app'
import {} from 'firebase/auth'

window.firebase = firebase;

import './App.css';

let user;

let provider = new firebase.auth.GoogleAuthProvider();
let authGoogle = () => {
    firebase.auth().signInWithPopup(provider).then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        let token = result.credential.accessToken;
        // The signed-in user info.
        user = result.user;
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

class App extends Component {
    constructor() {
        super();
        this.state = {
            user: false,
        };

        this.handleSignOut = () => {
            firebase.auth().signOut()
                .then(() => { this.setState({user: null}); })
                .catch((err) => { console.log(err); });
        };

        this.handleSignIn = () => {
            authGoogle();
        };

        firebase.auth().onAuthStateChanged((user) => {
            console.log(user);
            this.setState({user});
        });
    }

    auth() {
        if (this.state.user) {
            return <FlatButton label={this.state.user.displayName} onClick={this.handleSignOut}/>;
        } else {
            return <FlatButton label="Sign In" onClick={this.handleSignIn}/>;
        }
    }

    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <AppBar title="eiel.info" iconElementRight={this.auth()} />
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;
