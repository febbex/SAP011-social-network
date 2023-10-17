import { sair } from '../../services/firebaseLogin.js';
import { gravarPost, getCurrentUserName, lerPosts, editPost } from '../../services/firestore.js';

export default () => {
  const container = document.createElement('div');
  // Recupere o nome de usuário do Firebase
  const usuário = getCurrentUserName();
  const template = `
    <section id="feed">
      <header>
        <button id="btnSair">
          <img src="./assets/icon_sair.png" alt="icon_sair">
        </button>
      </header>

      <main class="main">
        <div class="newPost">
          <div class="infoUser">
          <img src="./assets/foto_perfil.png" class="imgUser" alt="fotoDoPerfil">
          <strong class="username">${usuário}</strong>         
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

    lerPosts(postTemplate);

    container.innerHTML = template;

    const btnPublicar = container.querySelector("#publicar");
    const postPlace = container.querySelector("#postPlace");
    const postsList = container.querySelector(".posts");
  
    function postTemplate(obj){
      const postagem = document.createElement('li');
      postagem.innerHTML = `
        <div class="infoUserPost">
          <img src="./assets/foto_perfil.png" class="imgUserPost" alt="fotoDoPerfil">
          <strong class="username_print"">${obj.uid}</strong>
        </div>
        <p name="textarea" id="postFeed">${obj.text}</p>
        <p class="postDate">Postado em: ${obj.date}</p>
        <div class="actionBtnPost">
          <button class="btnPost">
            <img src="./assets/icon_curtida2.svg" alt="curtir">
          </button>
          <button class="editPost"-${post.id} data-postid="${post.id}"> 
            <img src="./assets/icon_edt2.svg" alt="editar">
          </button>
        </div>`;

      // Adicione o elemento da postagem à lista de postagens
      postsList.appendChild(postagem);
  }
    //Aparecer o nome usuário
    btnPublicar.addEventListener('click', () => {
      const postText = postPlace.value;
      const currentDate = new Date().toLocaleString();
    
      // Limpe o campo de texto após a publicação
      postPlace.value = "";
  
      //chamar o Gravar a postagem no Firestore
      gravarPost(postText, currentDate, usuário);
    });
  
    const btnSair = container.querySelector('#btnSair');
    btnSair.addEventListener('click', sair);

    const btnEditar = container.querySelector('.editPost');
    btnEditar.addEventListener('click', (event) => {
      event.preventDefault();
      editPost();
    })
   
  
    return container;
  };
  /*<button id="btnPerfil">
  <img src="./assets/user-branco.png" alt="icon_perfil">Perfil
</button>*/