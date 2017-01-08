import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Avatar from 'material-ui/Avatar';
import Dialog from 'material-ui/Dialog';
import FontIcon from 'material-ui/FontIcon';

import Paper from 'material-ui/Paper';

import SNSButtonList from './SNSButtonList';
import MessageList from './MessageList';


import moment from 'moment';
moment.locale('ja');

import firebase from 'firebase/app'
import {} from 'firebase/auth'
import {} from 'firebase/database'


import './App.css';

const muiTheme = getMuiTheme({
    palette: {
        primary1Color: "#0B666C",
        accent1Color: "#AA2353",
    },
});

const config = {
    apiKey: "AIzaSyDpbq9hDmGyrzYJcGlvwrjJXL-01No3XNA",
    authDomain: "eiel-91077.firebaseapp.com",
    databaseURL: "https://eiel-91077.firebaseio.com",
    storageBucket: "eiel-91077.appspot.com",
    messagingSenderId: "356361494886"
};

firebase.initializeApp(config);

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

class App extends Component {
    constructor() {
        super();
        this.state = {
            user: false,
            signOutDialog: false,
            messages: []
        };

        setInterval(() => {
            this.setState({messages: this.state.messages});
        }, 500);

        firebase.auth().onAuthStateChanged((user) => {
            this.setState({user});
        });

        firebase.database().ref('messages').on('value', (snapshot) => {
            let values = snapshot.val();
            if (values) {
                let keys = Object.keys(values);
                let length = keys.length;

                let messages = [];
                for (let key of keys){
                    let message = values[key];
                    messages.unshift(message);
                }
                this.setState({messages});

                let updates = {};
                let deleteKeys = keys.splice(0,length-20);
                for (let key of deleteKeys) {
                    updates[key] = null;
                }
                firebase.database().ref('messages').update(updates);
            }
        });
    }

    handleOpenSignOutDialog = () => {
        this.setState({signOutDialog: true});
    }

    handleCloseSignOutDialog = () => {
        this.setState({signOutDialog: false});
    }

    handleSignOut = () => {
        firebase.auth().signOut()
            .then(this.handleCloseSignOutDialog)
            .then(() => { this.setState({user: null}); })
            .catch((err) => { console.log(err); });
    }

    handleSignIn = () => {
        authGoogle();
    };

    auth() {
        if (this.state.user) {
            return <div onClick={this.handleOpenSignOutDialog}>
                <Avatar src={this.state.user.photoURL} onClick={this.handleOpenSignOutDailog}/>
            </div>
        } else {
            return <FlatButton label="Sign In" onClick={this.handleSignIn}/>;
        }
    }

    addMessage(message) {
        const key = firebase.database().ref('messages').push().key;
        firebase.database().ref(`messages/${key}`).set({created_at: new Date().getTime(), message: message, photoURL: this.state.user.photoURL})
    }

    render() {
        const handleSignOutWithClose = () => {
            this.handleSignOut();
        };
        const actions = [
            <FlatButton
                label="キャンセル"
                onClick={this.handleCloseSignOutDialog}
            />,
            <FlatButton
                label="サインアウト"
                primary={true}
                keyboardFocused={true}
                onClick={this.handleSignOut}
            />,
        ];

        const userMessage = (() => {
            if (this.state.user === null) {
                return <Paper style={{margin: "10px", padding: "8px"}} zDepth={3}>
                    サインインすると挨拶ができます
                </Paper>
            } {
                return <div style={{"text-align": "center", margin: "10px"}}>
                    <RaisedButton label="挨拶をする" style={{width:200,margin: "auto", padding: "0"}} onClick={() => { this.addMessage(`${this.state.user.displayName}さんが挨拶しました。`) }}/>
                </div>
            }
        })();

        const message = (() => {
        })();

        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <div>
                    <AppBar title="eiel.info" iconElementRight={this.auth()} iconElementLeft={<FontIcon className="fa" />} />
                    <SNSButtonList />

                    {userMessage}

                    <MessageList messages={this.state.messages} />

                    <Dialog
                        title="サインアウトしますか?"
                        actions={actions}
                        modal={true}
                        open={this.state.signOutDialog}
                        onRequestClose={this.handleCloseSignOutDialog}
                    >
                    </Dialog>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;
