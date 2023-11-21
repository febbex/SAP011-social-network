import { register } from '../../firebase/firebaseCadastro.js';
import logoCadastro from '../../assets/outline-clipboard.png'

export default () => {
  const container = document.createElement('div');

  // Verificar o estado do modo escuro e aplicar as classes apropriadas
  const isDarkMode = localStorage.getItem('darkMode') === 'true';
  container.classList.toggle('dark', isDarkMode);

  const template = `
    <section id="container">
      <img id="imgCadastro" src="${logoCadastro}" alt="logo">
      <section id="formCadastro">
        <form action="" method="post">
          <h1>Cadastre-se</h1>
          <p><label for="name"></label>
          <input type="text" id="name" class="input-field" placeholder="Nome" required></p>
          <p><label for="username"></label>
          <input type="text" id="username" class="input-field" placeholder="Username" required>
          <p><label for="email"></label>
          <input type="email" id="email" class="input-field" placeholder="E-mail" required></p>
          <p><label for="password"></label>
          <input type="password" id="password" class="input-field" placeholder="Crie sua senha" required></p>
          <p><label for="confirmPassword"></label>
          <input type="password" id="confirmPassword" class="input-field" placeholder="Confirme sua senha" required></p>
          <div id="error-message"></div>
          <button type=submit id="btnCadastrar">Cadastrar</button>
          <p>Já possui uma conta?</p>
          <a id="acessarConta" href="#login">Acessar sua conta agora</a>
        </form>
      </section>
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
