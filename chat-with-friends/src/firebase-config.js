// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";


const firebaseConfig = {
    apiKey: "************************************",
    authDomain: "my-chat-app-5ca7a.firebaseapp.com",
    projectId: "my-chat-app-5ca7a",
    storageBucket: "my-chat-app-5ca7a.appspot.com",
    messagingSenderId: "396635605440",
    appId: "1:396635605440:web:224f864ba6027553c1a025"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();