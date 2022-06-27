import { auth, db } from '../firebase/index';
import { showNotification } from '@mantine/notifications';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from 'firebase/auth';

const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (e) {
    showNotification({
      title: 'Login Error',
      message: e.message,
    });
  }
};
