// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "travelplanner-60a6b.firebaseapp.com",
  projectId: "travelplanner-60a6b",
  storageBucket: "travelplanner-60a6b.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_MESSAGING_ID,
  appId: "1:523878017149:web:756978499b1ef5c8ad2914",
  measurementId: import.meta.env.VITE_MEASUREMENT_ID
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db=getFirestore(app)
