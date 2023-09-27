import { signInGoogle } from '../../services/firebaseLogin.js';

export default () => {
  const container = document.createElement('div');

  const template = `
<section id="container">

<img class="logoMyTrip" src="./assets/logo_mytrip.png" alt="logo">

<h1>My Trip</h1>

<section id="formLogin">
<form action="" method="post">
<label for="user">E-mail</label>
<input type="text" id="loginUser" class="input-field" required autofocus></p>

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

  async function loginGoogle(event) {
    event.preventDefault();

    await signInGoogle();
  location.hash = "#cadastro";
}

document.addEventListener("DOMContentLoaded", function() {
    
  if (btnLoginGoogle) {

 }
  });

  container.innerHTML = template;
  const btnLoginGoogle = container.querySelector("#contaGoogle");
  btnLoginGoogle.addEventListener("click", loginGoogle);

  return container;


}