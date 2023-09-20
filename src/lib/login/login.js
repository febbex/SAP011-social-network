export default () => {
  const login = document.createElement('div');

    const template = `
<section id="login">
<img src="./assets/logo_mytrip.png" alt="logo">

<h1>My Trip</h1>
<form action="" method="post">
<fieldset>
  <legend>Login</legend>

  <label for="user">E-mail</label>
  <input type="text" id="user" required autofocus>

  <label for="pass">Senha</label>
  <input type="password" id="pass" required>

  <input type="submit" value="Login">

  <div id="novaConta"
      <p class="criarConta"> Não tem conta? </p> 
      <a id="botaoCadastro" href="#cadastro">Cadastrar</a>
 </div>

</fieldset>

</form>
</section>`;

login.innerHTML = template;

return login;

}
