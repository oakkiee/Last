// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-94a97.firebaseapp.com",
  projectId: "mern-estate-94a97",
  storageBucket: "mern-estate-94a97.firebasestorage.app",
  messagingSenderId: "626861858319",
  appId: "1:626861858319:web:595d935ecd8efb871a8d7a"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);

