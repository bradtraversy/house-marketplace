// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDur7xF-UpAZdRT4KYEM-ejOWpUgeCD6oU",
  authDomain: "house-marketplace-f441c.firebaseapp.com",
  projectId: "house-marketplace-f441c",
  storageBucket: "house-marketplace-f441c.appspot.com",
  messagingSenderId: "175515175516",
  appId: "1:175515175516:web:1f079318ed8e8142fd7499",
  measurementId: "G-9STF71S3JF",
};

// Initialize Firebase
initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore();
