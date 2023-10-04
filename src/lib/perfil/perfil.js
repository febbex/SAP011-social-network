import { sair } from '../../services/firebaseLogin.js';

export default () => {
  const container = document.createElement('div');
  const template = `
    <section id="feed">
    <header>

    <button id=btnFeed>
    <img src="./assets/icon_feed.png" alt="icon_feed"></button>
    <button id="btnSair">
    <img src="./assets/icon_sair.png" alt="icon_sair">
    </button>

    </header>
    

</section>`;

container.innerHTML = template;

const btnSair = container.querySelector('#btnSair');
btnSair.addEventListener('click', sair); 

return container;
};
