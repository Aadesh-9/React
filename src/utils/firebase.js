// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBYNGX5peHbPQaBowu_czMCK29ZPF1sh5E",
  authDomain: "swiggy-clone-2212c.firebaseapp.com",
  projectId: "swiggy-clone-2212c",
  storageBucket: "swiggy-clone-2212c.appspot.com",
  messagingSenderId: "807403158685",
  appId: "1:807403158685:web:44d26a6cec49028d44e874",
  measurementId: "G-YV5L2JYVCS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
