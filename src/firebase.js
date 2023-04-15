// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "nicholas-wolch.firebaseapp.com",
    projectId: "nicholas-wolch",
    storageBucket: "nicholas-wolch.appspot.com",
    messagingSenderId: "527641136524",
    appId: "1:527641136524:web:acd88f1d300a7ab0d35aa9",
    measurementId: "G-SSL2KCKS93"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
export { auth, analytics };
