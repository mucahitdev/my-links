// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, setDoc, getDoc, doc } from "firebase/firestore";



const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    appId: process.env.FIREBASE_APP_ID,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, setDoc, getDoc, doc };

