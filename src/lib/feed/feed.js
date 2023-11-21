import { sair } from '../../firebase/firebaseLogin.js';
import {
  gravarPost,
  getCurrentUserName,
  lerPosts,
  excluirPost,
  editPost,
} from '../../firebase/firestore.js';
import  iconeSair  from '../../assets/icon_sair.png';
import  fotoPerfil  from '../../assets/foto_perfil.png';
import  curtida  from '../../assets/icon_curtida2.svg';
import  postEdt  from '../../assets/icon_edt2.svg';
import  excluir  from '../../assets/icon_excluir.png';
import lua from '../../assets/icon-moon.png'


export default () => {
  const container = document.createElement('div');
    // Verificar o estado do modo escuro e aplicar as classes apropriadas
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    container.classList.toggle('dark', isDarkMode);
  // Recupere o nome de usuário do Firebase
  const usuário = getCurrentUserName();
  const template = `
  <section id="feed">
      <header>
        <button id="btnSair">
          <img src="${iconeSair}" alt="icon_sair">
        </button>
        <button id="btnDark"><img id="icon_lua" class="icon-moon" src="${lua}" alt="logo"></button>
      </header>
  
      <main class="main">
        <div class="newPost">
          <div class="infoUser">
            <img src="${fotoPerfil}" class="imgUser" alt="fotoDoPerfil">
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
  container.innerHTML = template;

  const btnPublicar = container.querySelector('#publicar');
  const postPlace = container.querySelector('#postPlace');
  const postsList = container.querySelector('.posts');

  const mode = container.querySelector('#icon_lua');

  mode.addEventListener('click', () => {
    
    mode.classList.toggle('icon-moon');
    mode.classList.toggle('icon-sun');
    
    // Adicionei a classe 'dark' ao #container para ativar o modo escuro
    container.classList.toggle('dark');
  });


  // evento que publica o texto
  btnPublicar.addEventListener('click', () => {
    const postText = postPlace.value; //referência a um campo de entrada de texto 
    if (postText.trim() !== '') { 
      // !== significa "não é igual a
      //'' representa uma string vazia
      //trim remove os espaços em branco do início e do final da string
      const currentDate = new Date().toLocaleString(); //data e hr formata de acordo com as configurações regionais do navegador

      postPlace.value = ''; // Limpa o campo de texto após a publicação
      gravarPost(postText, currentDate, usuário);
    } else {
      const errorMessage = document.createElement('div');
      errorMessage.textContent = 'Insira um texto.';
      container.appendChild(errorMessage);
    }
  });
  //modal de edição para uma postagem 
  function openEditModal(postId, currentText) {
    const modal = document.createElement('div');
    modal.className = 'edit-modal';
    const modalContent = `
      <textarea id="editTextarea">${currentText}</textarea>
      <button id="saveEditBtn">Salvar</button>
    `;
    modal.innerHTML = modalContent;
    document.body.appendChild(modal);

    const editTextarea = modal.querySelector('#editTextarea');
    const saveEditBtn = modal.querySelector('#saveEditBtn');

    saveEditBtn.addEventListener('click', () => {
      const novoTexto = editTextarea.value;
      if (novoTexto.trim() !== '') {
        // Chame a função para editar a postagem no Firestore
        editPost(postId, novoTexto);
        // Atualize o texto exibido
        // Oculte o modal de edição
        modal.remove();
      }
    });
  }
//template de todos os posts
  function postTemplate(obj) {
    const postagem = document.createElement('li');
    postagem.innerHTML = `
      <div class="infoUserPost">
        <img src="${fotoPerfil}" class="imgUserPost" alt="fotoDoPerfil">
        <strong class="username_print">${obj.uid}</strong>
        <button data-postid="${obj.id}" class="excluirBtn">
          <img src="${excluir}" alt="excluir">
        </button>
      </div>
      <p data-postid="${obj.id}" name="textarea" id="postFeed">${obj.text}</p>
      <div class="actionBtnPost">
        <button class="likeBtn">
          <p><img src="${curtida}" alt="curtir">0</p>
        </button>
        <button class="editPost" data-postid="${obj.id}">
          <img src="${postEdt}" alt="editar">
        </button>
      </div>
      `;

    // Adicione o elemento da postagem à lista de postagens
    postsList.appendChild(postagem);
    const editButton = postagem.querySelector('.editPost');
    editButton.addEventListener('click', () => {
      // Abre o modal de edição
      openEditModal(obj.id, obj.text);
    });

    const btnDeletar = postagem.querySelector('.excluirBtn');

    btnDeletar.addEventListener('click', () => {
      if (window.confirm('Deseja excluir esta publicação?')) {
        excluirPost(obj.id);
        // Remove o elemento da postagem da lista
        postagem.remove();
      }
    });
  }
  lerPosts(postTemplate);

  const btnSair = container.querySelector('#btnSair');
  btnSair.addEventListener('click', sair);

  return container;
};
