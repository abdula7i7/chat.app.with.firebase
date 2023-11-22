// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDg9H-DIGY6TtQXRfX6e7abVdMduhCup38",
  authDomain: "react-firebase-chat-app-8b705.firebaseapp.com",
  projectId: "react-firebase-chat-app-8b705",
  storageBucket: "react-firebase-chat-app-8b705.appspot.com",
  messagingSenderId: "1086895349905",
  appId: "1:1086895349905:web:34d74fbfc05004d38b9f30",
  measurementId: "G-13C52ETYDY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)