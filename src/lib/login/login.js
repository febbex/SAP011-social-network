export default () => {
  const container = document.createElement('div');

    const template = `
<section id="login">
<img src="./assets/logo_mytrip.png" alt="logo">

<h1>My Trip</h1>
<section id="form-container">
<form action="" method="post">
  <label for="user">E-mail</label>
  <input type="text" id="user" required autofocus>

  <label for="pass">Senha</label>
  <input type="password" id="pass" required>

  <input type="submit" value="Login">
  </section>

  <section id="contaGoogle"
  <p>ou fazer login com</p>
  <img src="./assets/icon_google.png" alt="icon_google">
  </section>

<section id="novaConta"
<p class="criarConta"> Não possui conta? </p> 
<a id="botaoCadastro" href="#cadastro">Criar conta agora</a>
</section>
</form>

</section>`;

container.innerHTML = template;

return container;

}
