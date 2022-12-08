// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCxfdfrMwjl7jBXFQOo5rsnfVXqri9o9u8",
  authDomain: "household-app-ff31d.firebaseapp.com",
  projectId: "household-app-ff31d",
  storageBucket: "household-app-ff31d.appspot.com",
  messagingSenderId: "751167894306",
  appId: "1:751167894306:web:3dd674e23779f7038aab7b",
  measurementId: "G-QZHLMXDB9L",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
