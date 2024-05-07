import { initializeApp } from "firebase/app";
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    onAuthStateChanged,
    User
}from "firebase/auth";
import { getFunctions } from "firebase/functions";

//web app's Firebase config
const firebaseConfig = {
    apiKey: "AIzaSyCa4-3sLGktLlZYIl08Ew_byuj694jbR0Y",
    authDomain: "clone-421504.firebaseapp.com",
    projectId: "youtubeclone-421504",
    storageBucket: "youtubeclone-421504.appspot.com",
    messagingSenderId: "610865587091",
    appId: "1:610865587091:web:c2fef4518e1585ed2efe66"
};

//Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export const functions = getFunctions();

/**
 * Signs the user in with a Google popup.
 * @returns A promise that resolves with the user's credentials.
 */
export function signInWithGoogle() {
    return signInWithPopup(auth, new GoogleAuthProvider());
}

/**
 * Signs the user out.
 * @returns A promise that resolves when the user is signed out.
 */
export function signOut(){
    return auth.signOut();
}

/**
 * Trigger a callback when user auth state changes.
 * @returns A function to unsubscribe callback.
 */
export function onAuthStateChangedHelper(callback: (user: User | null) => void){
    return onAuthStateChanged(auth, callback);
}