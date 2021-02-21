import firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBBkSesQ12PP8r_JN5vZEpioJvLKeIJrSU",
  authDomain: "devom-next.firebaseapp.com",
  projectId: "devom-next",
  storageBucket: "devom-next.appspot.com",
  messagingSenderId: "1030094417348",
  appId: "1:1030094417348:web:443b7d3bba87e9f2ccc891",
  measurementId: "G-9RCXDN20WS",
};

if (!firebase.apps.length) {
  var firebaseApp = firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // if already initialized, use that one
}

const db = firebase.firestore(firebaseApp);
const storage = firebase.app().storage();

export { db, storage };
