import { getAuth } from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDK4cB4AUavvs4GAzXoMSbIPSjiKomxiGA",
  authDomain: "netflix-gpt-70c5a.firebaseapp.com",
  projectId: "netflix-gpt-70c5a",
  storageBucket: "netflix-gpt-70c5a.appspot.com",
  messagingSenderId: "489513019995",
  appId: "1:489513019995:web:d50763002739aeeff66d7e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();