import {signInGoogle} from "../../services/firebaseLogin.js"
export default () => {
  const container = document.createElement('div');

  const template = `
<section id="login">
<img src="./assets/logo_mytrip.png" alt="logo">

<h1>My Trip</h1>
<section id="form-container">
<form action="" method="post">
  <label for="user">E-mail</label>
  <input type="text" id="loginUser" class="loginUser" required autofocus>

  <label for="pass">Senha</label>
  <input type="password" id="senhaUser" class ="senhaUser" required>

  <input type="submit" value="Login">
  </section>
  
  <p>ou fazer login com</p>
  <button id="contaGoogle">
  <img src="./assets/icon_google.png" alt="icon_google">
  </button>

<section id="novaConta">
<p class="criarConta"> Não possui conta? </p> 
<a id="botaoCadastro" href="#cadastro">Criar conta agora</a>
</section>
</form>

</section>`;

  async function loginGoogle(event) {
    event.preventDefault();

    await signInGoogle ();
    location.hash = "#cadastro";
  }
  /*
  const loginGoogle = document.getElementById("contaGoogle");
  loginGoogle.addEventListener("click", signInGoogle);*/

  document.addEventListener("DOMContentLoaded", function () {
    
    if (btnLoginGoogle) {

    }
  });

  container.innerHTML = template;
  const btnLoginGoogle = container.querySelector("#contaGoogle");
  btnLoginGoogle.addEventListener("click", loginGoogle);

  return container;


}