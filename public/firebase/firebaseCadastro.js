import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { app } from './firebaseConfig.js';

const auth = () => getAuth(app);

function getErrorMessage(error) {
  if (error.code === 'auth/missing-password') {
    return 'Insira sua senha';
  }
  if (error.code === 'auth/invalid-email') {
    return 'Insira um email válido';
  }
  if (error.code === 'auth/missing-email') {
    return 'Insira um email válido';
  }
  if (error.code === 'auth/email-already-in-use') {
    return 'Email já cadastrado';
  }
  return error.message;
}

async function register(email, password) {
  const errorElement = document.getElementById('error-message');

  try {
    await createUserWithEmailAndPassword(auth(), email, password);
    window.location.hash = '#feed';
  } catch (error) {
    const errorMessage = getErrorMessage(error);
    errorElement.textContent = errorMessage;
  }
}
export { register };
