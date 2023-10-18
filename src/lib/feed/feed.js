import { sair } from '../../services/firebaseLogin.js';
<<<<<<< HEAD
import { gravarPost, getCurrentUserName, lerPosts, excluirPost } from '../../services/firestore.js';
=======
import { gravarPost, getCurrentUserName, lerPosts, editPost } from '../../services/firestore.js';
>>>>>>> 547e3658b2e5775c5c7238340309fc1c00cf3941

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

<<<<<<< HEAD
  const btnPublicar = container.querySelector("#publicar");
  const postPlace = container.querySelector("#postPlace");
  const postsList = container.querySelector(".posts");
=======
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
        <p class="postDate">${obj.date}</p>
        <div class="actionBtnPost">
          <button class="likeBtn">
           <p><img src="./assets/icon_curtida2.svg" alt="curtir">0</p>
          </button>
<<<<<<< HEAD
          <button class="editPost"-${post.id} data-postid="${post.id}"> 
=======
          <button class="btnEdtPost">
>>>>>>> 4c53dc3403cf65e525b6d0fe1db09e7782a63f1c
            <img src="./assets/icon_edt2.svg" alt="editar">
          </button>
        </div>`;
>>>>>>> 547e3658b2e5775c5c7238340309fc1c00cf3941

  function postTemplate(obj) {
    const postagem = document.createElement('li');
    postagem.innerHTML = `
      <div class="infoUserPost">
        <img src="./assets/foto_perfil.png" class="imgUserPost" alt="fotoDoPerfil">
        <strong class="username_print">${obj.uid}</strong>
        <button data-postid="${obj.id}" class="excluirBtn">
          <img src="./assets/icon_excluir.png" alt="excluir">
        </button>
      </div>
      <p name="textarea" id="postFeed">${obj.text}</p>
      <p class="postDate">${obj.date}</p>
      <div class="actionBtnPost">
        <button class="likeBtn">
          <p><img src="./assets/icon_curtida2.svg" alt="curtir">0</p>
        </button>
        <button class="btnEdtPost">
          <img src="./assets/icon_edt2.svg" alt="editar">
        </button>
      </div>`;

    // Adicione o elemento da postagem à lista de postagens
    postsList.appendChild(postagem);

    const deletePost = postagem.querySelector(".excluirBtn");

    deletePost.addEventListener('click', (event) => {
      const idPost = event.target.dataset.postid;
      if (window.confirm('Deseja excluir esta publicação?')) excluirPost(idPost);
      // Remove o elemento da postagem da lista
      postagem.remove();
    });
<<<<<<< HEAD
  }

  //Aparecer o nome usuário
  btnPublicar.addEventListener('click', () => {
    const postText = postPlace.value;
    const currentDate = new Date().toLocaleString();

    // Limpe o campo de texto após a publicação
    postPlace.value = "";

    // Chame a função para gravar a postagem no Firestore
    gravarPost(postText, currentDate, usuário);
  });

  const btnSair = container.querySelector('#btnSair');
  btnSair.addEventListener('click', sair);

  return container;
};
=======
  
    const btnSair = container.querySelector('#btnSair');
    btnSair.addEventListener('click', sair);

    const btnEditar = container.querySelector('.editPost');
    btnEditar.addEventListener('click', (event) => {
      event.preventDefault();
      editPost();
    })
   
  
    return container;
  };
>>>>>>> 547e3658b2e5775c5c7238340309fc1c00cf3941
