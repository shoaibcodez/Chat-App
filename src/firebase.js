import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAib9Dykc0OcE9fR2brElGtvxmLHVFwVzs",
  authDomain: "letschat-ab4ef.firebaseapp.com",
  projectId: "letschat-ab4ef",
  storageBucket: "letschat-ab4ef.appspot.com",
  messagingSenderId: "52926287028",
  appId: "1:52926287028:web:e69e40809fb203edbb1be1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
