import { doc, addDoc, Timestamp, setDoc, collection } from 'firebase/firestore';
import { db, auth } from '../firebase';

export const saveDoc = async (collectionName, data) => {
  try {
    const docRef = doc(collection(db, collectionName));

    const { uid } = auth.currentUser;

    const toSave = {
      ...data,
      Timestamp: Timestamp.now(),
      uid,
      id: docRef.id,
    };

    const document = await setDoc(docRef, toSave);

    return document;
  } catch (e) {
    console.log(e);
    return null;
  }
};