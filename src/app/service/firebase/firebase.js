import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_apiKey,
  authDomain: import.meta.env.VITE_APP_FIREBASE_authDomain,
  projectId: import.meta.env.VITE_APP_FIREBASE_projectId,
  storageBucket: import.meta.env.VITE_APP_FIREBASE_storageBucket,
  messagingSenderId: import.meta.env.VITE_APP_FIREBASE_messagingSenderId,
  appId: import.meta.env.VITE_APP_FIREBASE_appId,
  measurementId: import.meta.env.VITE_APP_FIREBASE_measurementId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
