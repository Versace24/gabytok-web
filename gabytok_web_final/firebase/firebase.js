
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAAnY6kaaxmQS4wpJxrAchF3bJQjCQ9GPs",
  authDomain: "gabytok-78fbb.firebaseapp.com",
  projectId: "gabytok-78fbb",
  storageBucket: "gabytok-78fbb.appspot.com",
  messagingSenderId: "985379012878",
  appId: "1:985379012878:web:483f58d91b38f70957175f"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
