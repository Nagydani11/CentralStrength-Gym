// src/firebase.js
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCRu8sjXJYH-fzHvYM6KrWMuxuzUmu1Lm8",
  authDomain: "central-strength.firebaseapp.com",
  projectId: "central-strength",
  storageBucket: "central-strength.appspot.com",
  messagingSenderId: "832031738485",
  appId: "1:832031738485:web:db0779177001c35213063c"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();





/*

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRu8sjXJYH-fzHvYM6KrWMuxuzUmu1Lm8",
  authDomain: "central-strength.firebaseapp.com",
  projectId: "central-strength",
  storageBucket: "central-strength.appspot.com",
  messagingSenderId: "832031738485",
  appId: "1:832031738485:web:db0779177001c35213063c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



*/



