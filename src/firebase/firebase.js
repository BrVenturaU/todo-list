import firebase from 'firebase';
import 'firebase/auth'
import 'firebase/firestore'

// firebase init - add your own config here
const firebaseConfig = {
    apiKey: "AIzaSyD3QezLN6Q7ChCUy9rpnh1Da54UgeC7XIQ",
    authDomain: "todo-list-2a625.firebaseapp.com",
    projectId: "todo-list-2a625",
    storageBucket: "todo-list-2a625.appspot.com",
    messagingSenderId: "242147291073",
    appId: "1:242147291073:web:b2f4c7eef8b0e566b00940"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// utils
const db = firebase.firestore()
const auth = firebase.auth()

// collection references
const usersCollection = db.collection('users')
const taskCollection = db.collection('task')

// export utils/refs
export {
  db,
  auth,
  usersCollection,
  taskCollection
}