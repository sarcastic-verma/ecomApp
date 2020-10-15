import firebase from "firebase";
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDDEvKtp2Y1I1b6WXuI3plqvgr1UWvDSeA",
    authDomain: "ecomapp-ee1ed.firebaseapp.com",
    databaseURL: "https://ecomapp-ee1ed.firebaseio.com",
    projectId: "ecomapp-ee1ed",
    storageBucket: "ecomapp-ee1ed.appspot.com",
    messagingSenderId: "29022169480",
    appId: "1:29022169480:web:a024dcf4f9af3cff38723d",
    measurementId: "G-41C3QF9HBC"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({"prompt": "select_account"});

export const signInWithGoogle = () =>
    auth.signInWithPopup(provider);

export default firebase;

