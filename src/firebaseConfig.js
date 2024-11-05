import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCe41OrD3m1I79_h0lxGqrpGRVziIZY4i8",
    authDomain: "backend-mi-proyecto.firebaseapp.com",
    projectId: "backend-mi-proyecto",
    storageBucket: "backend-mi-proyecto.firebasestorage.app",
    messagingSenderId: "809249695454",
    appId: "1:809249695454:web:235992c7a33d36279f044f",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);