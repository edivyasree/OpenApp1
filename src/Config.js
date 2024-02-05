
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyBnnpahDQgMRzayICOu_Row_p4WeMnbZeU",
  authDomain: "openapp-ec27e.firebaseapp.com",
  projectId: "openapp-ec27e",
  storageBucket: "openapp-ec27e.appspot.com",
  messagingSenderId: "124001594842",
  appId: "1:124001594842:web:3d31c58ccbd755eecf64e3",
  measurementId: "G-S82LQCRZ55"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider=new GoogleAuthProvider();
export {auth,provider};