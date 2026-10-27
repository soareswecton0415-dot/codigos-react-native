import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyDX-3ZWZ-i9msW6LgahEDzP7R0RIyq4wBU",
  authDomain: "projetodev-71732.firebaseapp.com",
  projectId: "projetodev-71732",
  storageBucket: "projetodev-71732.firebasestorage.app",
  messagingSenderId: "539747143109",
  appId: "1:539747143109:web:e30aa4fd804312a9758fac"
};


const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
})

export {db, auth};