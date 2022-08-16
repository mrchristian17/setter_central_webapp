// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBEq2ixr9QUTm8YEjj19WRpK4MJnTbt83U",
  authDomain: "setter-central-webapp.firebaseapp.com",
  projectId: "setter-central-webapp",
  storageBucket: "setter-central-webapp.appspot.com",
  messagingSenderId: "82989674970",
  appId: "1:82989674970:web:d045db723304848ba510e3",
};

getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

export { auth, db };
