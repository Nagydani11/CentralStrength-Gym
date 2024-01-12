
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCRu8sjXJYH-fzHvYM6KrWMuxuzUmu1Lm8",
  authDomain: "central-strength.firebaseapp.com",
  databaseURL: "https://central-strength-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "central-strength",
  storageBucket: "central-strength.appspot.com",
  messagingSenderId: "832031738485",
  appId: "1:832031738485:web:db0779177001c35213063c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getAuth(app)