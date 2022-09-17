import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAsN-NRC3iArMfE0gypNuDbMyLDu5CJsr4",
  authDomain: "clone-projects-9.firebaseapp.com",
  projectId: "clone-projects-9",
  storageBucket: "clone-projects-9.appspot.com",
  messagingSenderId: "174316682985",
  appId: "1:174316682985:web:bc6dc96cb0ea4af06dba78",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
