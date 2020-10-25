import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAtaTXjAWBtd4Pf7LZvWXdPZjRRI_ihABc',
  authDomain: 'crwn-db-1346a.firebaseapp.com',
  databaseURL: 'https://crwn-db-1346a.firebaseio.com',
  projectId: 'crwn-db-1346a',
  storageBucket: 'crwn-db-1346a.appspot.com',
  messagingSenderId: '888314462591',
  appId: '1:888314462591:web:c35b62b13c09ef56ca5a4a',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
