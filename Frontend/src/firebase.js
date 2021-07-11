import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp ({
    apiKey: "AIzaSyDSuUIplKpZriHS-ZpIhNUEOIEs7dKOmNE",
    authDomain: "teams-1e210.firebaseapp.com",
    projectId: "teams-1e210",
    storageBucket: "teams-1e210.appspot.com",
    messagingSenderId: "649149995626",
    appId: "1:649149995626:web:17cceae4ac68cfa3cb8813"
  }).auth();