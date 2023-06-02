import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCbH-rlxi146s82mZjg3cUUBMbMWhhlXQk",
    authDomain: "todo-list-web-a6564.firebaseapp.com",
    projectId: "todo-list-web-a6564",
    storageBucket: "todo-list-web-a6564.appspot.com",
    messagingSenderId: "1037551840605",
    appId: "1:1037551840605:web:bfa5e00218ec81c6314cb4"
  }
//init firebase
firebase.initializeApp(firebaseConfig)

//init services
const projectFirestore = firebase.firestore()

export { projectFirestore }