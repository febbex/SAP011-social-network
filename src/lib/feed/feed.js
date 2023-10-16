// feed.js
import { sair } from '../../services/firebaseLogin.js';
import { gravarPost, getCurrentUserName } from '../../services/firestore.js';

export default () => {
  const container = document.createElement('div');
  const template = `
    <section id="feed">
      <header>
        <button id="btnPerfil">
          <img src="./assets/user-branco.png" alt="icon_perfil">Perfil
        </button>
        <button id="btnSair">
          <img src="./assets/icon_sair.png" alt="icon_sair">
        </button>
      </header>
    
      <main class="main">
        <div class="newPost">
          <div class="infoUser">
            <div class="imgUser"></div>
            <strong>Usuário teste</strong>
          </div>
          <form action="" class="formPost">
            <textarea name="textarea" placeholder="Como foi sua viagem?" id="postPlace"></textarea>
          </form>
          <div class="iconsAndBtn">
            <button id="publicar">Publicar</button>
          </div>
          <ul class="posts">
            <!-- Aqui é onde as postagens serão exibidas -->
          </ul>
        </div>
      </main>
    </section>`;
  container.innerHTML = template;

  const btnPublicar = container.querySelector("#publicar");
  const postPlace = container.querySelector("#postPlace");
  const postsList = container.querySelector(".posts");

  //Aparecer o nome usuário
  btnPublicar.addEventListener('click', () => {
    const postText = postPlace.value;
    const currentDate = new Date().toLocaleString();
    // Recupere o nome de usuário do Firebase
    const usuário = getCurrentUserName();

    // Crie um elemento para a postagem e insira os dados
    const postagem = document.createElement('li');
    postagem.innerHTML = `
      <div class="infoUserPost">
        <div class="imgUserPost"></div>
        <strong class="name">${usuário}</strong>
      </div>
      <textarea name="textarea" id="postFeed">${postText}</textarea>
      <p class="postDate">Postado em: ${currentDate}</p>
      <div class="actionBtnPost">
        <button class="btnPost">
          <img src="./assets/icon_curtida2.svg" alt="curtir">
        </button>
        <button class="btnPost">
          <img src="./assets/icon_edt2.svg" alt="editar">
        </button>
      </div>`;

    // Adicione o elemento da postagem à lista de postagens
    postsList.appendChild(postagem);

    // Limpe o campo de texto após a publicação
    postPlace.value = "";

    // Gravar a postagem no Firestore
    gravarPost(postText, currentDate,usuário);
  });

  const btnSair = container.querySelector('#btnSair');
  btnSair.addEventListener('click', sair);

  return container;
};
