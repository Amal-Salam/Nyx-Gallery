// Import the firebases functions needed from the SDKs 
import { initializeApp } from 'firebase/app';
import {getAuth} from 'firebase/auth';



const firebaseConfig = {
  apiKey: 'AIzaSyANMfoefn1860kt8pmKdtgnOkiD5qj0wSk',
  authDomain: 'dnd-image-gallery-login.firebaseapp.com',
  projectId: 'dnd-image-gallery-login',
  storageBucket: 'dnd-image-gallery-login.appspot.com',
  messagingSenderId: '1008513555537',
  appId: '1:1008513555537:web:a96bd8058e5e212535ac70',
  measurementId: 'G-ZLPHFP63P0',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth =  getAuth(app);





