// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAoYxMDlBmra7ZMiZzVdy3SY4zfnpjwxrE",
  authDomain: "spardha-login.firebaseapp.com",
  projectId: "spardha-login",
  storageBucket: "spardha-login.appspot.com",
  messagingSenderId: "199274365737",
  appId: "1:199274365737:web:5a95836ca53a5964bbed38",
  measurementId: "G-M6SPK0W41Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const database = getAuth(app);