// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

    
const firebaseConfig = {
    apiKey: "AIzaSyDDbojH0FG7e9_XuhrmSFmvORzrCNRq_mY",
    authDomain: "app-social-2891b.firebaseapp.com",
    projectId: "app-social-2891b",
    storageBucket: "app-social-2891b.firebasestorage.app",
    messagingSenderId: "1010039381864",
    appId: "1:1010039381864:web:04095d2af9473fa6cac0dd",
    measurementId: "G-304Z437SX8"
};
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };