import firebase from "firebase";
import 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyB5d0oi4uBkc9Cx0tAG2NtNwtrvxautAOQ",
    authDomain: "reactsocial-2f53a.firebaseapp.com",
    projectId: "reactsocial-2f53a",
    storageBucket: "reactsocial-2f53a.appspot.com",
    messagingSenderId: "714183299433",
    appId: "1:714183299433:web:e8bbd9f00d3fb03a4f6df8",
    measurementId: "G-Z96JFZ5RZE"
  };
  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
   const auth=firebase.auth();
   const storage=firebase.storage();
   const provider= new firebase.auth.GoogleAuthProvider();
   export {db, auth, storage, provider};