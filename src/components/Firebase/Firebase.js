import * as FIREBASE_CONST_ from './FIREBASE_CONSTANTS.env';

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
        console.log("doCreateUserWithEmailAndPassword(): email,password:", email, password);
        return this.auth.createUserWithEmailAndPassword(email, password);
        //    .then( response => {
        //        console.log("[Firebase.js] doCreate...blaBla..(): ", response);
        //    }).catch(error => {
        //        console.log('[Firebase.js] error', error);
        //        alert('[Firebase.js] error', error);
        //    });
    }

    doSignInWithEmailAndPassword     = (email, password) => {
        return this.auth.signInWithEmailAndPassword(email, password);
    } 

    doSignOut = () => {
        this.auth.signOut()
            .then(response => {
                console.log(response);
            });
    }

    doPasswordReset = (email) => {
        this.auth.sendPasswordResetEmail(email);
    };

    doPasswordUpdate = (password) => {
        this.auth.currentUser.updatePassword();
    };
}

export default Firebase;