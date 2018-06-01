import { connect } from 'react-redux'
import App from '../App'

import firebase from 'firebase/app'
import {} from 'firebase/auth'
import {} from 'firebase/database'

import moment from 'moment'

import { setMessages, setUser, setOpenSignOutDailog, setNow } from '../actions'

moment.locale('ja');

const config = {
    apiKey: "AIzaSyDpbq9hDmGyrzYJcGlvwrjJXL-01No3XNA",
    authDomain: "eiel-91077.firebaseapp.com",
    databaseURL: "https://eiel-91077.firebaseio.com",
    storageBucket: "eiel-91077.appspot.com",
    messagingSenderId: "356361494886"
};

firebase.initializeApp(config);

function addMessage(message, photoURL) {
    const key = firebase.database().ref('messages').push().key;
    firebase.database().ref(`messages/${key}`).set({created_at: new Date().getTime(), message: message, photoURL: photoURL})
}

let provider = new firebase.auth.GoogleAuthProvider();
let authGoogle = () => {
    firebase.auth().signInWithPopup(provider).then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        // let token = result.credential.accessToken;
        // The signed-in user info.
        // let user = result.user;
        // ...
    }).catch(function(error) {
        // Handle Errors here.
        // let errorCode = error.code;
        // let errorMessage = error.message;
        // The email of the user's account used.
        // let email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        // let credential = error.credential;
        // ...
    });
};


function intialFirebase(dispatch) {

    firebase.auth().onAuthStateChanged((user) => {
        dispatch(setUser(user));
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

            dispatch(setMessages(messages));

            let updates = {};
            let deleteKeys = keys.splice(0,length-20);
            for (let key of deleteKeys) {
                updates[key] = null;
            }
            firebase.database().ref('messages').update(updates);
        }
    });
}

function mapStateToProps(state) {
    return {
        user: state.user,
        isOpenSignOutDialog: state.isOpenSignOutDialog,
        onClick: () => {
            addMessage(`${state.user.displayName}さんが挨拶しました。`, state.user.photoURL)
        },
        onSignIn: () => {
            authGoogle();
        }
    };
}

function forceUpdate500msec(dispatch) {
    setInterval(() => {
        dispatch(setNow());
    }, 500);
    dispatch(setNow());
}

function mapDispatchToProps(dispatch) {
    intialFirebase(dispatch);
    forceUpdate500msec(dispatch);

    return {
        onSignOut: () =>  {
            firebase.auth().signOut()
                .then(this.handleCloseSignOutDialog)
                .then(() => { dispatch(setUser(null)); })
                .catch((err) => { console.log(err); });
        },
        onOpenSignOutDialog: () => {
            dispatch(setOpenSignOutDailog(true))
        },
        onCloseSignOutDialog: () => {
            dispatch(setOpenSignOutDailog(false))
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
