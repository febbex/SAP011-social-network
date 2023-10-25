import {
  collection,
  query,
  onSnapshot,
  addDoc,
  orderBy,
  doc,
  deleteDoc,
  updateDoc,
} from 'firebase/firestore';
import { db, auth } from './firebaseConfig.js';

// Função para obter o nome de usuário do usuário autenticado
export function getCurrentUserName() {
  const user = auth.currentUser; // Obtém o usuário autenticado atual

  if (user) {
    return user.displayName; // Retorna o nome de usuário do usuário autenticado
  }

  return null; // Retorna null caso não haja usuário autenticado
}

export function lerPosts(postTemplate) {
  const q = query(collection(db, 'posts'), orderBy('date', 'desc'));
  onSnapshot(q, (querySnapshot) => {
    const postsList = document.querySelector('.posts');
    postsList.innerHTML = ''; // Limpe a lista de posts antes de atualizá-la

    querySnapshot.forEach((post) => {
      const obj = {
        text: post.data().text,
        date: post.data().date,
        uid: post.data().uid,
        id: post.id,
      };
      postTemplate(obj);
    });
  });
}

export async function gravarPost(text, date, uid) {
  const docRef = await addDoc(collection(db, 'posts'), {
    text,
    date,
    uid,
    likes: [],
  });
  console.log('post:', docRef.id);
}

export async function editPost(postId, novoTexto) {
  const postRef = doc(db, 'posts', postId);
  await updateDoc(postRef, {
    text: novoTexto,
  });
}

export async function excluirPost(id) {
  await deleteDoc(doc(db, 'posts', id));
}
