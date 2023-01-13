import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore'

// Firebase info removed. To use, insert your own Firebase config values
const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);