import { getApp, getApps, initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVnA-1s84tVxjyaHstx1Z2JfsKzi62y5g",
  authDomain: "mantenimientos-23765.firebaseapp.com",
  projectId: "mantenimientos-23765",
  storageBucket: "mantenimientos-23765.appspot.com",
  messagingSenderId: "945416258248",
  appId: "1:945416258248:web:5305792a6253da7e7bdbfd"
}


// Initialize Firebase for SSR
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()

// Initialize Firebase services
const firestore = getFirestore(app)
const auth = getAuth(app)

export { app, firestore, auth }