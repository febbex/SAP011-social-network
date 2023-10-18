// firestore.js
import { db, auth } from "./firebaseConfig.js";
<<<<<<< HEAD
import { collection, query, onSnapshot, addDoc, doc, updateDoc } from "firebase/firestore";
=======
import { collection, query, onSnapshot, addDoc, orderBy, } from "firebase/firestore";
>>>>>>> 4c53dc3403cf65e525b6d0fe1db09e7782a63f1c

// Função para obter o nome de usuário do usuário autenticado
export function getCurrentUserName() {
  const user = auth.currentUser; // Obtém o usuário autenticado atual

  if (user) {
    return user.displayName; // Retorna o nome de usuário do usuário autenticado
  } else {
    return "Nome de usuário padrão"; // Ou um valor padrão caso o usuário não esteja autenticado
  }
}
export function lerPosts(postTemplate) {
  const q = query(collection(db, "posts"), orderBy ('date', 'desc'));
  const unsubscribe = onSnapshot(q, (querySnapshot) => {
    const postsList = document.querySelector(".posts");
    postsList.innerHTML = ""; // Limpe a lista de posts antes de atualizá-la

    querySnapshot.forEach((doc) => {
      const obj = {
        text: doc.data().text,
        date: doc.data().date,
        uid: doc.data().uid,
        id: doc.id,
      }
      postTemplate(obj)
    });
  });
}
// Atualize sua função gravarPost para incluir o campo "likes".
export async function gravarPost(text, date, uid) {
  const docRef = await addDoc(collection(db, "posts"), {
    text: text,
    date: date,
    uid: uid,
    likes: [], // Inicialmente, a postagem não possui nenhum "like".
  });
  console.log("post: ", docRef.id);
}

<<<<<<< HEAD
//Edição de post: existe a função updateDoc do firebase e para trabalhar com ela, é preciso passar para o firebase qual o banco de dados, a coleção e o post que eu quero encontrar.
//Para saber qual post quero editar, preciso passar o id do post específico, e falar que quero atualizar o texto ou deletar
//Para atualizar, também preciso falar o que quero atualizar: ex. text e repassar esse novo valor
export async function editPost(id, text) {
  const refDoc = doc(db, 'posts', `${id}`);
  await updateDoc(refDoc, {
    text: text,
  });
};
=======
>>>>>>> 4c53dc3403cf65e525b6d0fe1db09e7782a63f1c
