import { initializeApp } from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyCarGTHnn8Su3kprgXwOzRl3nkhAZ2gty4',
  authDomain: 'clone-eb071.firebaseapp.com',
  projectId: 'clone-eb071',
  storageBucket: 'clone-eb071.appspot.com',
  messagingSenderId: '106586861549',
  appId: '1:106586861549:web:3fc1d23cbe87ba71c4c1e4',
  measurementId: 'G-CYRTMT68XZ',
}

const firebaseApp = firebase.initializeApp(firebaseConfig)

// export const db = firebaseApp.firestore()
// export const auth = firebase.auth()

export default firebaseApp
