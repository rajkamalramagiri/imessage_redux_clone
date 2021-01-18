import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB0z5192AEHN3JlkH8K59phD4MmzHIWuak",
  authDomain: "imessage-clone-yt-e2e2e.firebaseapp.com",
  projectId: "imessage-clone-yt-e2e2e",
  storageBucket: "imessage-clone-yt-e2e2e.appspot.com",
  messagingSenderId: "491021851972",
  appId: "1:491021851972:web:3d24e3153fba0dc65c0b11",
  measurementId: "G-KRT4FPPJXW",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { auth, provider };
export default db;
