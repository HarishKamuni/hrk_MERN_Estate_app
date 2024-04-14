// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: 'mern-estate-80aa9.firebaseapp.com',
  projectId: 'mern-estate-80aa9',
  storageBucket: 'mern-estate-80aa9.appspot.com',
  messagingSenderId: '553920014917',
  appId: '1:553920014917:web:5df5b7939c54e62410512c',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
