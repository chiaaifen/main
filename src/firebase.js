import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDndH7Svdrup3iy5t1UejbE2G9-ODXSBKc",
    authDomain: "younus-144b9.firebaseapp.com",
    databaseURL: "https://younus-144b9.firebaseio.com",
    projectId: "younus-144b9",
    storageBucket: "younus-144b9.appspot.com",
    messagingSenderId: "100706729397",
    appId: "1:100706729397:web:57cff026c19cad38d66dfc",
    measurementId: "G-RJ91H0B48C"
  };

  firebase.initializeApp(firebaseConfig);
  var database = fiebase.firestore();
  export default database;