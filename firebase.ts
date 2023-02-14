import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnaMDTVGsR6Oy2AxR4yVmGk26Y1EPjdeA",
  authDomain: "chatgpt-clone-jtraver.firebaseapp.com",
  projectId: "chatgpt-clone-jtraver",
  storageBucket: "chatgpt-clone-jtraver.appspot.com",
  messagingSenderId: "1012162607902",
  appId: "1:1012162607902:web:121c7657b155cbccfca70f",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
