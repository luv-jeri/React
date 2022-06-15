import { doc, Timestamp, setDoc, collection } from 'firebase/firestore';
import { db, auth } from '../firebase';
import { showNotification } from '@mantine/notifications';

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

    showNotification({
      title: `Saved  😁`,
      message: `${collectionName} saved successfully.`,
    });

    return document;
  } catch (e) {
    console.log(e);
    showNotification({
      title: `Error 😢`,
      message: e.message,
    });
    return null;
  }
};
