import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { setPersistence, browserSessionPersistence } from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyBAo424gsla_yvnu3lL4uKCT3F2oBF9bc4",
  authDomain: "insta-project-33408.firebaseapp.com",
  projectId: "insta-project-33408",
  storageBucket: "insta-project-33408.appspot.com",
  messagingSenderId: "121349270239",
  appId: "1:121349270239:web:fcc6babe911bf663f5976a",
  measurementId: "G-WRX9F85C8E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize the Firebase services
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

setPersistence(auth, browserSessionPersistence)
  .then(() => {
    console.log("Persistence is set to session-based");
  })
  .catch((error) => {
    console.error("Error setting persistence:", error);
  });

export { db, auth, storage };
