
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLesYBzxUoZRW-G_V3PmVPFwi0aAKXd78",
  authDomain: "clone1-36ccb.firebaseapp.com",
  projectId: "clone1-36ccb",
  storageBucket: "clone1-36ccb.appspot.com",
  messagingSenderId: "1021975363228",
  appId: "1:1021975363228:web:c33d0dbf8a2777fc367759"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth();
export const db=getFirestore(app);
export default app;