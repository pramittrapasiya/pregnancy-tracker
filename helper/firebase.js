// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAFcCId8vxeIRm91HNQJjR7F_7fMemg0IY",
  authDomain: "pregnancy-tracker-back-end.firebaseapp.com",
  projectId: "pregnancy-tracker-back-end",
  storageBucket: "pregnancy-tracker-back-end.appspot.com",
  messagingSenderId: "452646370377",
  appId: "1:452646370377:web:b2db0390907b1989c11398",
  measurementId: "G-H38E1TPWM4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);