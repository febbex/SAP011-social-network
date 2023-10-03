import login from './lib/login/login.js';
import cadastro from './lib/cadastro/cadastro.js';
import feed from './lib/feed/feed.js';

const main = document.querySelector('#app');

const init = () => {
  window.addEventListener('hashchange', () => {
    main.innerHTML = '';
    switch (window.location.hash) {      
      case '#login':
        main.appendChild(login());
        break;
      case '#cadastro':
        main.appendChild(cadastro());
        break;
      case '#feed':
        main.appendChild(feed());
        break;
      default:
        login();
    }
  });
};
window.addEventListener('load', () => {
  main.appendChild(login());
  init(); // chama a função para funcionar //
});