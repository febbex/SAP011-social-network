import {
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  signInWithEmailAndPassword,
} from 'firebase/auth';

import { app } from './firebaseConfig.js';

const auth = () => getAuth(app);

const provider = new GoogleAuthProvider();

// Função para logar com o Google
async function signInGoogle() {
  await signInWithPopup(auth(), provider)
    .then(() => {
      // Remova as variáveis não utilizadas
      window.location.hash = '#feed';
    })
    .catch(() => {
      // Remova as variáveis não utilizadas
      // Lida com o erro ou exibe uma mensagem de erro, se necessário
    });
}

// Função para sair e voltar à página de login
async function sair() {
  await signOut(auth())
    .then(() => {
      // Sign-out successful.
    })
    .catch(() => {
      // Lida com o erro ou exibe uma mensagem de erro, se necessário
    });
  window.location.hash = '#login';
}

function checkLogin() {
  onAuthStateChanged(auth(), (user) => {
    if (user) {
      window.location.hash = '#feed';
    } else {
      window.location.hash = '#login';
    }
  });
}

function getErrorMessage(error) {
  if (error.code === 'auth/invalid-login-credentials') {
    return 'Usuário não encontrado';
  }
  if (error.code === 'auth/missing-password') {
    return 'Insira sua senha';
  }
  if (error.code === 'auth/invalid-email') {
    return 'Insira um email válido';
  }
  return error.message;
}

async function displayErrorMessage(message) {
  const errorElement = document.getElementById('error-message');
  errorElement.textContent = message;
}

async function signIn(email, password) {
  await signInWithEmailAndPassword(auth(), email, password)
    .then(() => {
      window.location.hash = 'feed';
    })
    .catch((error) => {
      const errorMessage = getErrorMessage(error);
      displayErrorMessage(errorMessage);
    });
}

export {
  signInGoogle,
  sair,
  signIn,
  checkLogin,
};
