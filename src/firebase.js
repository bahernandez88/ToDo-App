import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA0czZIieKjNdGrogykcSc6adP-xhfgr3I",
  authDomain: "todo-list-54857.firebaseapp.com",
  projectId: "todo-list-54857",
  storageBucket: "todo-list-54857.appspot.com",
  messagingSenderId: "530365881665",
  appId: "1:530365881665:web:fd03365fb92a999b5ed5c0"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };

