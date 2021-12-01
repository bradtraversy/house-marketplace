import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDA8LVcBB6ZuFMGtZZLEh_veJ44WGrNRdE',
  authDomain: 'house-marketplace-app-fb1d0.firebaseapp.com',
  projectId: 'house-marketplace-app-fb1d0',
  storageBucket: 'house-marketplace-app-fb1d0.appspot.com',
  messagingSenderId: '832068369979',
  appId: '1:832068369979:web:dce177da9bfc60a4b4e61e',
}

// Initialize Firebase
initializeApp(firebaseConfig)
export const db = getFirestore()
