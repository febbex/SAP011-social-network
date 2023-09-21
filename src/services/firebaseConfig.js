// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIOeg0h6dLumsmZImpDFcwZByItQHjeqg",
  authDomain: "mytrip-a8a2c.firebaseapp.com",
  projectId: "mytrip-a8a2c",
  storageBucket: "mytrip-a8a2c.appspot.com",
  messagingSenderId: "71994082512",
  appId: "1:71994082512:web:d62313c2e9bce19cef0ad5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);