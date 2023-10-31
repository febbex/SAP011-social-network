import { signInGoogle, signIn, checkLogin } from '../../firebase/firebaseLogin.js';
import logo from '../../assets/logo_mytrip.png'
import iconeGoogle from '../../assets/icon_google.png'
export default () => {
  const container = document.createElement('div');

  const template = `
<section id="container">

<img class="logoMyTrip" src="${logo}" alt="logo">

<h1>My Trip</h1>

<section id="formLogin">
<form action="" method="post">
<label for="loginUser"></label>
<input type="email" id="loginUser"class="input-field" placeholder="E-mail" required autofocus>
<p><label for="senhaUser"></label>
<input type="password" id="senhaUser" class ="input-field" placeholder="Senha" required></p>
<div id="error-message"></div>

<button id="submit" type="submit">Login</button>
</section>

<p>ou fazer login com</p>
<button id="contaGoogle">
<img src="${iconeGoogle}" alt="icon_google">
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
  btnLogin.addEventListener('click', login); //dicionando um ouvinte de evento ao elemento armazenado na variável

  // função para logar com o google //
  async function loginGoogle(event) {
    event.preventDefault();

    await signInGoogle();
  }

  const btnLoginGoogle = container.querySelector('#contaGoogle');

  document.addEventListener('DOMContentLoaded', () => {
  });
  btnLoginGoogle.addEventListener('click', loginGoogle);

  return container;
};
