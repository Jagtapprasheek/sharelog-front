// src/firebase.js
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBLHYJ4YZf5mJuFAB1N7TdeWjzwhKaaRNA",
  authDomain: "sharelog-2ca8c.firebaseapp.com",
  projectId: "sharelog-2ca8c",
  storageBucket: "sharelog-2ca8c.appspot.com",
  messagingSenderId: "265523763056",
  appId: "1:265523763056:web:909915907ee1efdd50e1b5",
  measurementId: "G-4KG07KBR9V"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
