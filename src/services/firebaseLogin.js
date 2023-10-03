import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  signInWithEmailAndPassword,
} from 'firebase/auth';

import { app } from './firebaseConfig.js';

const auth = () => getAuth(app);

const provider = new GoogleAuthProvider();

// função para logar com o google //
async function signInGoogle() {
  await signInWithPopup(auth(), provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;//
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const credential = GoogleAuthProvider.credentialFromError(error);
    });
}
 // função para sair e voltar a pág Login //
async function sair() {
  await signOut(auth())
    .then(() => {
      // Sign-out successful.
    })
    .catch((error) => {
      // An error happened.
    });
  window.location.hash = '#login';
}
/* function checkLogin() {
  onAuthStateChanged(auth(), (user) => {
    if (user) {
      console.log("usuário logado");
      return true;
    } else {
      location.hash = "#login";
    }
  });
} */
async function signIn(email, password) {
  await signInWithEmailAndPassword(auth(), email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
}
export { signInGoogle, sair, signIn };
