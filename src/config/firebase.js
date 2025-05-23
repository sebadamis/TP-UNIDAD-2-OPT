import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCwB74GqYXPBz4nx_PpA5evFkFPezKlGbk",
    authDomain: "fir-1-76876.firebaseapp.com",
    projectId: "fir-1-76876",
    storageBucket: "fir-1-76876.firebasestorage.app",
    messagingSenderId: "120945765384",
    appId: "1:120945765384:web:2cab1f4bd9fcbb8c1475bd"
};


const app = initializeApp(firebaseConfig);

const database = getFirestore(app);

export default database;