import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "./firebaseConfig.js";
//import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { async } from "regenerator-runtime"; //não entendi de onde apareceu esse import e nem sei se devo manter

const auth = () => getAuth(app);

  async function register (email, password) {
    await createUserWithEmailAndPassword(auth(), email, password)
    .then((userCredential) => {
        const user = userCredential.user;
        window.location.hash = "#feed";
    })
    .catch((error) => {
        alert(getErrorMessage(error));
    });
   }

function getErrorMessage(error){
    if(error.code == "auth/missing-password"){
        return "Insira sua senha";
      }
    if(error.code == "auth/invalid-email"){
      return "Insira um email válido";
    }
      return error.message;
} //fazer as funções de validação para os outros campos 

export { register };
