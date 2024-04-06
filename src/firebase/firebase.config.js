// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyByn5h-o9JUTLNBuVm8gocIs0gODaQWAQE",
  authDomain: "user-email-password-auth-6483f.firebaseapp.com",
  projectId: "user-email-password-auth-6483f",
  storageBucket: "user-email-password-auth-6483f.appspot.com",
  messagingSenderId: "347186602505",
  appId: "1:347186602505:web:b63bd78cf4145d7bcbced8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;