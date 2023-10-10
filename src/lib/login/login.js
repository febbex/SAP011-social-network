import { signInGoogle, signIn, checkLogin } from '../../services/firebaseLogin.js';

export default () => {
  const container = document.createElement('div');

  const template = `
<section id="container">

<img class="logoMyTrip" src="./assets/logo_mytrip.png" alt="logo">

<h1>My Trip</h1>

<section id="formLogin">
<form action="" method="post">
<label for="loginUser"></label>
<input type="email" id="loginUser"class="input-field" placeholder="E-mail" required autofocus>
<p><label for="senhaUser"></label>
<input type="password" id="senhaUser" class ="input-field" placeholder="Senha" required></p>

<button id="submit" type="submit">Login</button>
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
  container.innerHTML = template;

  const loginUser = container.querySelector('#loginUser');
  const senhaUser = container.querySelector('#senhaUser');

  // função para Login do usuário //
  async function login(event) {
    event.preventDefault();

    const emailUser = loginUser.value;
    const passwordUser = senhaUser.value;

    await signIn(emailUser, passwordUser);
    if (checkLogin === true);
  }
  const btnLogin = container.querySelector('#submit');
  btnLogin.addEventListener('click', login);

  // função para logar com o google //
  async function loginGoogle(event) {
    event.preventDefault();

    await signInGoogle();
  }

  const btnLoginGoogle = container.querySelector('#contaGoogle');

  document.addEventListener('DOMContentLoaded', function () {
    if (btnLoginGoogle) {
    }
  });

  btnLoginGoogle.addEventListener('click', loginGoogle);

  return container;
}