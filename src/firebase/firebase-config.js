import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCQ_c5WMRsdCWK4RRmYn9DX_fhi9VAY0KM",
    authDomain: "react-app-journal-538fc.firebaseapp.com",
    projectId: "react-app-journal-538fc",
    storageBucket: "react-app-journal-538fc.appspot.com",
    messagingSenderId: "1080536389700",
    appId: "1:1080536389700:web:99060f3d069e2252528411"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

  export {
      db,
      googleAuthProvider,
      firebase
  }