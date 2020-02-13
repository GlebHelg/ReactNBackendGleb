import * as FIREBASE_CONST_ from './FIREBASE_CONSTANTS';

import app from 'firebase/app';
import 'firebase/auth';

const config = {
    apiKey           : FIREBASE_CONST_.REACT_APP_API_KEY            ,
    authDomain       : FIREBASE_CONST_.REACT_APP_AUTH_DOMAIN        ,
    databaseURL      : FIREBASE_CONST_.REACT_APP_DATABASE_URL       ,
    projectId        : FIREBASE_CONST_.REACT_APP_PROJECT_ID         ,
    storageBucket    : FIREBASE_CONST_.REACT_APP_STORAGE_BUCKET     ,
    messagingSenderId: FIREBASE_CONST_.REACT_APP_MESSAGING_SENDER_ID
};

class Firebase {
    constructor(){
        app.initializeApp(config);
        this.auth = app.auth();
    }

    // AUTH API. Do this:
    doCreateUserWithEmailAndPassword = (email, password) => {
        this.auth.createUserWithEmailAndPassword(email, password);
    }

    doSignInWithEmailAndPassword     = (email, password) => {
        this.auth.signInWithEmailAndPassword(email, password);
    } 

    doSignOut = () => {
        this.auth.signOut();
    }

    doPasswordReset = (email) => {
        this.auth.sendPasswordResetEmail(email);
    };

    doPasswordUpdate = (password) => {
        this.auth.currentUser.updatePassword();
    };
}

export default Firebase;