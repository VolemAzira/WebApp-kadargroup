// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGzyGN-0-EE813W35dWtRy_0NcYWtsXnw",
  authDomain: "kadarberkah.firebaseapp.com",
  projectId: "kadarberkah",
  storageBucket: "kadarberkah.appspot.com",
  messagingSenderId: "299176767896",
  appId: "1:299176767896:web:935508462192b3d263bbed",
  measurementId: "G-K8J1Y7G2YN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app