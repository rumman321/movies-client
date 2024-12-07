
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-XXd-E62Ggq06wpwWJVKZRUMcQEzrX1s",
  authDomain: "movie-b4d29.firebaseapp.com",
  projectId: "movie-b4d29",
  storageBucket: "movie-b4d29.firebasestorage.app",
  messagingSenderId: "80319159275",
  appId: "1:80319159275:web:ab9d6a8141955d2ff797ae",
  measurementId: "G-D6V275J9Y1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);