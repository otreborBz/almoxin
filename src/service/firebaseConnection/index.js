import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyDIz0RCGV-WVWu6vZIXNz4boejDZfsFkHo",
  authDomain: "app-almoxin.firebaseapp.com",
  projectId: "app-almoxin",
  storageBucket: "app-almoxin.firebasestorage.app",
  messagingSenderId: "156374043758",
  appId: "1:156374043758:web:b23d781ef0972bf9ffea7f",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export { db, auth };
