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
export function lerPosts(postTemplate) {
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
      postTemplate(obj)
    });
  });
}
//gravando os posts
export async function gravarPost(text, date,uid) {
  const docRef = await addDoc(collection(db, "posts"), {
    text: text,
    date: date,
    uid: uid, 
    like: [],
  });
  console.log("post: ", docRef.id);
}
