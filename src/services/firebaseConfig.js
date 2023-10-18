import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth'
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: 'AIzaSyAIOeg0h6dLumsmZImpDFcwZByItQHjeqg',
  authDomain: 'mytrip-a8a2c.firebaseapp.com',
  projectId: 'mytrip-a8a2c',
  storageBucket: 'mytrip-a8a2c.appspot.com',
  messagingSenderId: '71994082512',
  appId: '1:71994082512:web:d62313c2e9bce19cef0ad5'
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);


export { auth, app, db}
