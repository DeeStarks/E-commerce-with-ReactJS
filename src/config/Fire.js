import firebase from 'firebase';

let fire = require('firebase')
var firebaseConfig = {
    apiKey: "AIzaSyDJraKZicn1aLdlbuLHx8QMwGqIqpKIWNA",
    authDomain: "react-webstore-d7003.firebaseapp.com",
    databaseURL: "https://react-webstore-d7003.firebaseio.com",
    projectId: "react-webstore-d7003",
    storageBucket: "react-webstore-d7003.appspot.com",
    messagingSenderId: "497117449215",
    appId: "1:497117449215:web:077a8c1004c2229818b5ca",
    measurementId: "G-E592ZDX1M9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default fire;