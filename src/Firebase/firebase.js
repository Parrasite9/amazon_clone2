// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';




const firebaseConfig = {
    apiKey: "AIzaSyDjo61PtGfuvVeS9cPkxLxJ2i9n0TDIvEI",
    authDomain: "challenge-380a7.firebaseapp.com",
    projectId: "challenge-380a7",
    storageBucket: "challenge-380a7.appspot.com",
    messagingSenderId: "628697727592",
    appId: "1:628697727592:web:497d9f0d253bc099cf71dd",
    measurementId: "G-0KE5HZ9TZ7"
};

// // const firebaseConfig = firebase.initializeApp(firebaseConfig)
const firebaseApp = firebase.initializeApp(firebaseConfig);

// THIS IS TO HELP ACCEPT PAYMENTS 
const db = firebaseApp.firestore();

// // THIS IS TO HELP AUTHORIZE LOGIN
const auth = firebase.auth();

export { db, auth }