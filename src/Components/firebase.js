// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBIIzDdvQ-ISRhhfZjui_bKfzVgGvNsy5A",
  authDomain: "snitch-clone-d4135.firebaseapp.com",
  projectId: "snitch-clone-d4135",
  storageBucket: "snitch-clone-d4135.appspot.com",
  messagingSenderId: "284800987985",
  appId: "1:284800987985:web:e3e066e19513b88ab09970",
  measurementId: "G-F5QFGYJTMT"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth()

export{app, auth}
