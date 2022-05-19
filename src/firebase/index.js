import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDLx-hXLLMSMgT2sxgpDpN-Vlf4oVGfa2Q',
  authDomain: 'plzdo-9b727.firebaseapp.com',
  projectId: 'plzdo-9b727',
  storageBucket: 'plzdo-9b727.appspot.com',
  messagingSenderId: '811523980710',
  appId: '1:811523980710:web:75feaa44aa5c0ba32c2367',
  measurementId: 'G-X9PHMWC1CX',
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app); // db -> firestore

export const auth = getAuth(app);
