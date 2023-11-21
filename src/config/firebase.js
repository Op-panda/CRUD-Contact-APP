// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBnLHDKiHLUgYwLzuyl44A6FngJxVg90UA",
    authDomain: "vite-contact-45a2d.firebaseapp.com",
    projectId: "vite-contact-45a2d",
    storageBucket: "vite-contact-45a2d.appspot.com",
    messagingSenderId: "541076007687",
    appId: "1:541076007687:web:119599aa353b3a2696f3a2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);