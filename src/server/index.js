import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDW4jxsM-6_STpJjrSJYTNLzqVHWZ35d3E",
  authDomain: "uzum-4317b.firebaseapp.com",
  projectId: "uzum-4317b",
  storageBucket: "uzum-4317b.appspot.com",
  messagingSenderId: "653021980045",
  appId: "1:653021980045:web:75ecc4974c6d355f2bc9c4",
  measurementId: "G-TBPR82DZ06"
};

const app = initializeApp(firebaseConfig);
// db - DataBase
export const db = getFirestore(app)

