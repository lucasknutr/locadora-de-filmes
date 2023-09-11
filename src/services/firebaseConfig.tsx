

import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";


const firebaseConfig = {

  apiKey: "AIzaSyCZ8BsT3rkM3KfsUGnMAeyxYkK-hI8L0wE",

  authDomain: "locadora-de-filmes-7b992.firebaseapp.com",

  projectId: "locadora-de-filmes-7b992",

  storageBucket: "locadora-de-filmes-7b992.appspot.com",

  messagingSenderId: "455361374955",

  appId: "1:455361374955:web:3540b5afdf0b017a382cae",

  measurementId: "G-3T99BNK0Y7"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);



// Exportando minha variavel de autenticacao
export const auth = getAuth(app);