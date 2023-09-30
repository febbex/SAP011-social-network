import { signInGoogle, signIn, checkLogin } from '../../services/firebaseLogin.js';

export default () => {
  const container = document.createElement('div');

  const template = `
<section id="container">

<img class="logoMyTrip" src="./assets/logo_mytrip.png" alt="logo">

<h1>My Trip</h1>

<section id="formLogin">
<form action="" method="post">
<p><label for="user">E-mail</label>
<input type="text" id="loginUser"class="input-field" required autofocus></p>
<p><label for="pass">Senha</label>
<input type="password" id="senhaUser" class ="input-field" required></p>
<p><input id="submit" type="submit" value="Login"></p>
</section>

<p>ou fazer login com</p>
<a id="contaGoogle">
<img src="./assets/icon_google.png" alt="icon_google">
</a>

<section id="novaConta">
<p class="criarConta"> Não possui conta? </p> 
<a id="botaoCadastro" href="#cadastro">Criar conta agora</a>
</section>
</form>

</section>`;

  const loginUser = container.querySelector("#loginUser");
  const senhaUser = container.querySelector("#senhaUser");

  async function login(event) {
    event.preventDefault();

    const emailUser = loginUser.value;
    const passwordUser = senhaUser.value;

    await signIn(emailUser, passwordUser);
    if (checkLogin === true) {
      location.hash = "feed";

    }
  }
  async function loginGoogle(event) {
    event.preventDefault();

    await signInGoogle();
    location.hash = "#feed";
  }

  document.addEventListener("DOMContentLoaded", function () {

    if (btnLoginGoogle) {

    }
  });

  container.innerHTML = template;
  const btnLogin = container.querySelector("#submit");
  btnLogin.addEventListener("click", login);

  const btnLoginGoogle = container.querySelector("#contaGoogle");
  btnLoginGoogle.addEventListener("click", loginGoogle);

  return container;
}


