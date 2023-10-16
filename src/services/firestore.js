// firestore.js
import { db, auth } from "./firebaseConfig.js";
import { collection, query, onSnapshot, addDoc } from "firebase/firestore";

// Função para obter o nome de usuário do usuário autenticado
export function getCurrentUserName() {
  const user = auth.currentUser; // Obtém o usuário autenticado atual

  if (user) {
    return user.displayName; // Retorna o nome de usuário do usuário autenticado
  } else {
    return "Nome de usuário padrão"; // Ou um valor padrão caso o usuário não esteja autenticado
  }
}
export function lerPosts() {
  const q = query(collection(db, "posts"));
  const unsubscribe = onSnapshot(q, (querySnapshot) => {
    const postsList = document.querySelector(".posts");
    postsList.innerHTML = ""; // Limpe a lista de posts antes de atualizá-la

    querySnapshot.forEach((doc) => {
      const obj = {
        text: doc.data().text,
        date: doc.data().date,
        uid: doc.data().uid,
      }

      // Crie um elemento para a postagem e insira os dados
      const postagem = document.createElement('li');
      postagem.innerHTML = `
        <div class="infoUserPost">
          <img src="./assets/foto_perfil.png" class="imgUserPost" alt="fotoDoPerfil">
          <strong class="username">${obj.uid}</strong>
        </div>
        <textarea name="textarea" id="postFeed">${obj.text}</textarea>
        <p class="postDate">Postado em: ${obj.date}</p>
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
    });
  });
}
//gravando os posts
export async function gravarPost(text, date,uid) {
  const docRef = await addDoc(collection(db, "posts"), {
    text: text,
    date: date,
    uid: uid, 
  });
  console.log("post: ", docRef.id);
}
