import { register } from '../../firebase/firebaseCadastro';

export default () => {
  const container = document.createElement('div');
  const template = `
  <section id="container-cadastro">

  <img id="imgCadastro" src="./assets/outline-clipboard.png" alt="logo">
  
  <section id="formCadastro">
  <form action="" method="post">

  <h1>Cadastre-se</h1>
  
  <p><label for="name"></label>
  <input type="text" id="name" placeholder="Nome" required></p>
  
  <p><label for="username"></label>
  <input type="text" id="username" placeholder="Username" required>

  <p><label for="email"></label>
  <input type="email" id="email" placeholder="E-mail" required></p>

  <p><label for="password"></label>
  <input type="password" id="password" placeholder="Crie sua senha" required></p>

  <p><label for="confirmPassword"></label>
  <input type="password" id="confirmPassword" placeholder="Confirme sua senha" required></p>
  <div id="error-message"></div>

  <button type=submit id="btnCadastrar">Cadastrar</button>

  <p>Já possui uma conta?</p>
  <a id="acessarConta" href="#login">Acessar sua conta agora</a>
  </form>
  </section>`;
  container.innerHTML = template;

  const email = container.querySelector('#email');
  const password = container.querySelector('#password');

  async function cadastro(event) {
    event.preventDefault();

    const userEmail = email.value;
    const userPassword = password.value;
    await register(userEmail, userPassword);
  }
  const btnCadastrar = container.querySelector('#btnCadastrar');
  btnCadastrar.addEventListener('click', cadastro);

  return container;
};
