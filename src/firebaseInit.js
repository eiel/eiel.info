import firebase from 'firebase/app';

let config = {
    apiKey: "AIzaSyDpbq9hDmGyrzYJcGlvwrjJXL-01No3XNA",
    authDomain: "eiel-91077.firebaseapp.com",
    databaseURL: "https://eiel-91077.firebaseio.com",
    storageBucket: "eiel-91077.appspot.com",
    messagingSenderId: "356361494886"
};

export default firebase.initializeApp(config);
