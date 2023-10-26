import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD_SAbbG2HnJU-UfcIM7uVNsrQSRpWqgaE",
  authDomain: "mytrip-1b924.firebaseapp.com",
  projectId: "mytrip-1b924",
  storageBucket: "mytrip-1b924.appspot.com",
  messagingSenderId: "58686258726",
  appId: "1:58686258726:web:b3f25f9728a2a8d09fb0e7"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, app, db };
