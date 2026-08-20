// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB3o3EMKNVQgi3B6zib6ZM4Moef1xFTgWU",
  authDomain: "hellofirstlove-news.firebaseapp.com",
  projectId: "hellofirstlove-news",
  storageBucket: "hellofirstlove-news.firebasestorage.app",
  messagingSenderId: "941777667416",
  appId: "1:941777667416:web:d43350f9a97b4ccdba912d",
  measurementId: "G-ZRZENXMJWJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;