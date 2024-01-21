// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAcmTYT5nSfn3SqvC91swbmynxJrH46ja4",
  authDomain: "snitchclone.netlify.app",
  projectId: "snitch-clone-auth",
  storageBucket: "snitch-clone-auth.appspot.com",
  messagingSenderId: "604834732790",
  appId: "1:604834732790:web:2f07f13e334028b0892ad7",
  measurementId: "G-JTBPTSQ916"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth()


export {app, auth};