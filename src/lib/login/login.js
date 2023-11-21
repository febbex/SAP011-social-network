import { signInGoogle, signIn, checkLogin } from '../../firebase/firebaseLogin.js';
import logo from '../../assets/logo_mytrip.png'
import iconeGoogle from '../../assets/icon_google.png'
import lua from '../../assets/icon-moon.png'

export default () => {
  const container = document.createElement('div');

  // Verificar o estado do modo escuro e aplicar as classes apropriadas
  const isDarkMode = localStorage.getItem('darkMode') === 'true';
  container.classList.toggle('dark', isDarkMode);

  const template = `
    <section id="container">
      <img class="logoMyTrip" src="${logo}" alt="logo">
      <section id="formLogin">
        <img id="icon_lua" class="${isDarkMode ? 'icon-sun' : 'icon-moon'}" src="${lua}" alt="logo">
        <h1>My Trip</h1>
        <form action="" method="post">
          <label for="loginUser"></label>
          <input type="email" id="loginUser" class="input-field" placeholder="E-mail" required autofocus>
          <p><label for="senhaUser"></label>
          <input type="password" id="senhaUser" class="input-field" placeholder="Senha" required></p>
          <div id="error-message"></div>
          <button id="submit" type="submit">Login</button>
          <p>ou fazer login com</p>
          <button id="contaGoogle">
            <img src="${iconeGoogle}" alt="icon_google">
          </button>
          <section id="novaConta">
            <p class="criarConta"> Não possui conta? </p> 
            <a id="botaoCadastro" href="#cadastro">Criar conta agora</a>
          </section>
        </form>
      </section>
    </section>`;

  container.innerHTML = template;

  const loginUser = container.querySelector('#loginUser');
  const senhaUser = container.querySelector('#senhaUser');
  const mode = container.querySelector('#icon_lua');

  mode.addEventListener('click', () => {
    mode.classList.toggle('icon-moon');
    mode.classList.toggle('icon-sun');
  
    // Adicionei a classe 'dark' ao #container para ativar o modo escuro
    container.classList.toggle('dark');
  
    // Armazenar o estado do modo escuro no localStorage
    localStorage.setItem('darkMode', container.classList.contains('dark'));
  });

  // função para Login do usuário //
  async function login(event) {
    event.preventDefault();

    const emailUser = loginUser.value;
    const passwordUser = senhaUser.value;

    await signIn(emailUser, passwordUser);
    if (checkLogin === true) {
      // Faça algo quando o login for bem-sucedido
    }
  }

  const btnLogin = container.querySelector('#submit');
  btnLogin.addEventListener('click', login);

  // função para logar com o google //
  async function loginGoogle(event) {
    event.preventDefault();

    await signInGoogle();
  }

  const btnLoginGoogle = container.querySelector('#contaGoogle');
  btnLoginGoogle.addEventListener('click', loginGoogle);

  return container;
};
