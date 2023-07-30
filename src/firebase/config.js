import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCsArizqog4ohdiK5fDxdemBH2H3wiGoXc",
  authDomain: "peon4rey-5ba3f.firebaseapp.com",
  projectId: "peon4rey-5ba3f",
  storageBucket: "peon4rey-5ba3f.appspot.com",
  messagingSenderId: "978222607257",
  appId: "1:978222607257:web:819151f6a772c5dccf8108"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };

