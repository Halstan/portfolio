import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyBmnPMzBPW3vjxEeLr8FNy6qoLaZViZQJA',
  authDomain: 'portfolio-52b32.firebaseapp.com',
  projectId: 'portfolio-52b32',
  storageBucket: 'portfolio-52b32.appspot.com',
  messagingSenderId: '672140197297',
  appId: '1:672140197297:web:54a22513dc10532c0a1190'
}
// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
} else {
  firebase.app()
}

const db = firebase.firestore()
const auth = firebase.auth()
const storage = firebase.storage()

export {
  firebase,
  db,
  auth,
  storage
}
