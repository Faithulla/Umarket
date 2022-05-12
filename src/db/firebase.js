// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyDGoyUDI1iINW4NAGYsbfQKBIKtnE4rFEU",

  authDomain: "umarket-69.firebaseapp.com",

  projectId: "umarket-69",

  storageBucket: "umarket-69.appspot.com",

  messagingSenderId: "230848693423",

  appId: "1:230848693423:web:4419acff975bfbb840805a",

  measurementId: "G-R8E26Z0QX3"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);