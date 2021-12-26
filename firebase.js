import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCNhap4gfJ1EZDuaOZQ5Vt3q_lEvjyTYgU",
  authDomain: "instagram-clone-6c195.firebaseapp.com",
  projectId: "instagram-clone-6c195",
  storageBucket: "instagram-clone-6c195.appspot.com",
  messagingSenderId: "611357674681",
  appId: "1:611357674681:web:87b22c9d7698c1979c9f68",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
