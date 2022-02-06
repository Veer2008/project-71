import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyBAuZEPzt990hIDNpIdnOnYo5qSH6UOOkA",
    authDomain: "e-ride-b1624.firebaseapp.com",
    projectId: "e-ride-b1624",
    storageBucket: "e-ride-b1624.appspot.com",
    messagingSenderId: "673108505411",
    appId: "1:673108505411:web:5a73503075a33b9146f5f6"
  };





firebase.initializeApp(firebaseConfig);

export default firebase.firestore();


