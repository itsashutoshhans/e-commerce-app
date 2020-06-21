
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBTPvlE3NMy-ZWsnGEaUBSCsxQOIZQY4Ro",
  authDomain: "crwn-db-ahans.firebaseapp.com",
  databaseURL: "https://crwn-db-ahans.firebaseio.com",
  projectId: "crwn-db-ahans",
  storageBucket: "crwn-db-ahans.appspot.com",
  messagingSenderId: "701154780088",
  appId: "1:701154780088:web:ecdf4e865c565c4884654d",
  measurementId: "G-57GDCSX0P2"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account'
})

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;


