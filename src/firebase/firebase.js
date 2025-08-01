// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXUWNlP7vAHCg2atkCZrRhNRWMeg5Af0I",
  authDomain: "task-app-7492a.firebaseapp.com",
  projectId: "task-app-7492a",
  storageBucket: "task-app-7492a.firebasestorage.app",
  messagingSenderId: "376094887846",
  appId: "1:376094887846:web:a70a961819031acf0fc967",
  measurementId: "G-Z9LTYJ99NQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
// const db = getFirestore(app);
export { app, auth, analytics };
