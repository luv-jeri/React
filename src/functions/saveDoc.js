import { doc, addDoc, Timestamp, setDoc, collection } from 'firebase/firestore';
import { db, auth } from '../firebase';

export const saveDoc = async (collectionName, data) => {
  try {
    const { uid } = auth.currentUser;

    const toSave = {
      ...data,
      Timestamp: Timestamp.now(),
      uid,
    };

    const document = await addDoc(collection(db, collectionName), toSave);

    return document;
  } catch (e) {
    console.log(e);
    return null;
  }
};
