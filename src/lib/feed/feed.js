import { sair } from "../../services/firebaseLogin.js";

export default () => {
    const container = document.createElement('div');
    const template = `
    <section id="feed">
    <header>
    <a class=userHeader>
    <img src="./assets/user-branco.png" alt="icon_sair"></a>
    <button id="btnSair">
    <img src="./assets/icon_sair.png" alt="icon_sair">
    </button>
    </header>
    
    
    <section id="container">
    <section id="input-container">
    <input type="text" name="post" placeholder="Como foi sua viagem?" id="postPlace"/>
    <p><input id="publicar" type="submit" value="Publicar"></p>
    </section>
    </section>
    </section>

      

    </form>
    </section>`;  


  container.innerHTML = template; 

  const btnSair = container.querySelector("#btnSair");
  btnSair.addEventListener("click", sair);//chama a função sair, ao clicar no btn sair

  return container;
  }