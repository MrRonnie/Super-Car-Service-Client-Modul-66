// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA714Rc8nJsxU7r0bpnKmFdgv8EX9c63ig",
  authDomain: "super-car-services.firebaseapp.com",
  projectId: "super-car-services",
  storageBucket: "super-car-services.appspot.com",
  messagingSenderId: "551477338372",
  appId: "1:551477338372:web:1a254c01cb0854365b3051",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default app;
