import { doc, Timestamp, setDoc, collection } from 'firebase/firestore';
import { db, auth } from '../firebase';

export const saveDoc = async (collectionName, data) => {
  try {
    //~ Creating a document Ref
    const docRef = doc(collection(db, collectionName));

    const { uid } = auth.currentUser; //~ Get the current user's uid

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
