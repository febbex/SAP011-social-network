import { sair } from '../../services/firebaseLogin.js';
export default () => {
  const container = document.createElement('div');
  const template = `
    <section id="feed">
    <header>

    <button id=btnPerfil>
    <img src="./assets/user-branco.png" alt="icon_perfil">Perfil</button>
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
    <textarea name="textarea" placeholder="Como foi sua viagem?"></textarea>

    <div class="iconsAndBtn">
  

    <button id="publicar" type="submit" class="btnSubmitForm">Publicar</button>

    </div> 
    </form>
    </div>
    <ul class="posts"></ul>
    </main>
 </form>
</section>`;
  container.innerHTML = template;

 // Seleciona o botão "Publicar" e o textarea
  const btnPublicar = container.querySelector('#publicar');
  const textarea = container.querySelector('textarea');
  const postsList = container.querySelector('.posts'); // Seleciona a lista de posts

  // Adiciona um evento de clique ao botão "Publicar"
  btnPublicar.addEventListener('click', (event) => {
    event.preventDefault(); // Evita que o formulário seja submetido (recarregando a página)

     // Obtém o texto do textarea
    const texto = textarea.value;

    if (texto.trim() !== '') { // Verifica se o texto não está vazio
    // Cria um novo elemento de post
      const newPost = document.createElement('li');
      newPost.classList.add('post'); // Adiciona a classe 'post' ao novo post
      newPost.innerHTML = `
        <div class="infoUserPost">
          <div class="imgUserPost"></div>
          <strong class="name">Usuário teste</strong>
        </div>
        <p>${texto}</p>
        <div class="actionBtnPost">
          <button class="btnPost">
            <img src="./assets/icon_curtida2.svg" alt="curtir">
          </button>
          <button class="btnPost">
            <img src="./assets/icon_edt2.svg" alt="editar">
          </button>
        </div>
      `;

      // Adiciona o novo post à lista de posts
      postsList.appendChild(newPost);

      // Limpa o textarea após a publicação
      textarea.value = '';
    }
  });

  const btnSair = container.querySelector('#btnSair');
  btnSair.addEventListener('click', sair); // chama a função sair, ao clicar no btn sair //

  return container;
};
