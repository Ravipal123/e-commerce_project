import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDFMjcjcKrk742KiSAZ2Gdv2WUoxHoOqGQ",
  authDomain: "myfirstapp-6e4c3.firebaseapp.com",
  projectId: "myfirstapp-6e4c3",
  storageBucket: "myfirstapp-6e4c3.appspot.com",
  messagingSenderId: "209030578474",
  appId: "1:209030578474:web:b47b494024a7a9a2365e53"
};

const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app);

export {fireDB , auth}