// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'


const firebaseConfig = {
    apiKey: "AIzaSyAmnd2l6ae9jHStwoYc0zt_duZTImgqmbQ",
    authDomain: "clone-4aa3d.firebaseapp.com",
    projectId: "clone-4aa3d",
    storageBucket: "clone-4aa3d.appspot.com",
    messagingSenderId: "912110619256",
    appId: "1:912110619256:web:37984f1281b86c8ce33b8d",
    measurementId: "G-8TLHT55W2R"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore();
  const auth= firebase.auth();

  export {db, auth};