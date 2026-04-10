import { deleteComments } from "./modules/coments/index.js";
import { createComments, getComments } from "./modules/coments/index.js";
import { createPosts, getPosts } from "./modules/posts/index.js";
import { getUsers, getUsersById } from "./modules/users/index.js";

let idComment =prompt("Ingrese el id para eliminar el comentario ")

deleteComments(idComment);
// let userId= prompt("Ingrese el usuario");
// let title= prompt("Ingrese el titulo");
// let body= prompt("Ingrese el body");

// const post = {
//     userId,
//     title,
//     body,
// }

// createPosts(post);

// let listaPosts = await getPosts();

// console.log(listaPosts);

// let listaComentarios = await getComments();

// console.log(listaComentarios);

// const comment ={
//     postId: 5,
//     name: "Aprendiendo",
//     body: "estoy aprendiendo muy poco,no me enseñan nada"
// }

// createComments(comment)

// let listaUsuarios = await getUsers()
// // let usuario = await getUsersById(5)

// console.log(listaUsuarios);
// // console.log(usuario);


