import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCKrkRCYDujEg31zlOisPxj4Z5xBqpLiLM",
  authDomain: "mytrip-ba618.firebaseapp.com",
  projectId: "mytrip-ba618",
  storageBucket: "mytrip-ba618.appspot.com",
  messagingSenderId: "349173921736",
  appId: "1:349173921736:web:84b64ab17340c23c5db2fd"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, app, db };
