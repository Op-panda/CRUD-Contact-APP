// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDW9R5WPhY5bnEH-EpTOYzHGByUVzj4NXM",
    authDomain: "contact-app-29500.firebaseapp.com",
    projectId: "contact-app-29500",
    storageBucket: "contact-app-29500.appspot.com",
    messagingSenderId: "49845171830",
    appId: "1:49845171830:web:36c70ebe67aa04caec5157"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
