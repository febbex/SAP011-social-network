import login from "./lib/Login/login.js";
import cadastro from "./lib/cadastro/cadastro.js";

const main = document.querySelector("#app");

const init = () => {
    window.addEventListener("hashchange", () => {
        main.innerHTML = "";
        switch (window.location.hash) {      
            case "#login":
                main.appendChild(login());
                break;
            case "#cadastro":
                main.appendChild(cadastro());
                break;
                default:
                    login();

        }
    })
}

window.addEventListener("load", () => {
    main.appendChild(login());
    init(); //chama a função para funcionar

})