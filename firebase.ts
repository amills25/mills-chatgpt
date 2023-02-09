import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfdfeKG4I1QrALIPyMvpHEWCjLkUdPE80",
  authDomain: "mills-chatgpt-clone.firebaseapp.com",
  projectId: "mills-chatgpt-clone",
  storageBucket: "mills-chatgpt-clone.appspot.com",
  messagingSenderId: "788663070418",
  appId: "1:788663070418:web:4d9ce8970b35d1db6b070b",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
