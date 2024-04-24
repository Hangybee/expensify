// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { collection, getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCrNIrFiEAP9Bz54_pQFer2CVSodQFRd-c",
  authDomain: "expensify-b9fe8.firebaseapp.com",
  projectId: "expensify-b9fe8",
  storageBucket: "expensify-b9fe8.appspot.com",
  messagingSenderId: "821104651637",
  appId: "1:821104651637:web:c66aaf0384f3d335eaf73c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app)

export const tripsRef = collection(db, 'trips')
export const expensesRef = collection(db, 'expenses')