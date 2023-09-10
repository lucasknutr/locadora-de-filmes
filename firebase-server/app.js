// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

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

const analytics = getAnalytics(app);