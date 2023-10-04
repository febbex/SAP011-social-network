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
    <ul class="posts">
    <li class="post">
        <div class="infoUserPost">
            <div class="imgUserPost"></div>
                    <strong class="name">
                        Usuário teste
                    </strong>
                </div>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
            Quis ipsum suspendisse ultrices gravida.
            Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>

        <div class="actionBtnPost">
                <button class="btnPost">
                    <img src="./assets/icon_curtida2.svg" alt="curtir">
                </button>
                <button class="btnPost">
                    <img src="./assets/icon_edt2.svg" alt="editar">
                </button>
            </div>
    </li>
    <li class="post">
           <div class="infoUserPost">
            <div class="imgUserPost"></div>
                    <strong class="name">
                    Usuário teste
                    </strong>
                </div>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
            Quis ipsum suspendisse ultrices gravida.
            Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>

        <div class="actionBtnPost">
                <button class="btnPost">
                    <img src="./assets/icon_curtida2.svg" alt="curtir">
                </button>
                <button class="btnPost">
                    <img src="./assets/icon_edt2.svg" alt="editar">
                </button>
            </div>
    </li>

    <li class="post">
        <div class="infoUserPost">
            <div class="imgUserPost"></div>
            <strong class="name">
            Usuário teste
        </strong>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
            Quis ipsum suspendisse ultrices gravida.
            Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>

        <div class="actionBtnPost">
                <button class="btnPost">
                    <img src="./assets/icon_curtida2.svg" alt="curtir">
                </button>
                <button class="btnPost">
                    <img src="./assets/icon_edt2.svg" alt="editar">
                </button>
            </div>
    </li>
</ul>
    </main>
 </form>
</section>`;
  container.innerHTML = template;

  const btnSair = container.querySelector('#btnSair');
  btnSair.addEventListener('click', sair); // chama a função sair, ao clicar no btn sair //

  return container;
};
