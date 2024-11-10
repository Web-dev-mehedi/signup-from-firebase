// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxZWvAMNRlUFYXpR8mCL1tv38xN9Cyw68",
  authDomain: "signup-by-email-ff3cd.firebaseapp.com",
  projectId: "signup-by-email-ff3cd",
  storageBucket: "signup-by-email-ff3cd.firebasestorage.app",
  messagingSenderId: "341203028555",
  appId: "1:341203028555:web:4f2e25a928e60f4d025bce"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
