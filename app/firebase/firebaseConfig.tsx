import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyBu--ehYNoUplyxLL-EYurEbAC_C1e6Djg",
  authDomain: "login-auth-95d21.firebaseapp.com",
  projectId: "login-auth-95d21",
  storageBucket: "login-auth-95d21.appspot.com",
  messagingSenderId: "387944829380",
  appId: "1:387944829380:web:bbc6d780efd73f06e2d491",
};
const app = initializeApp(firebaseConfig);
export const auth =getAuth()
export default app;