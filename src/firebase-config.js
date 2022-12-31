// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";
import { Firebase_Config } from "./pages/config";

const firebaseConfig = Firebase_Config;

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firebaseDatabase = getDatabase(app);
const firebaseStorage = getStorage(app);

export {
    firebaseDatabase,
    firebaseStorage
}