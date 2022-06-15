import { doc, addDoc, Timestamp, setDoc, collection } from 'firebase/firestore';
import { db, auth } from '../firebase';

export const addDoc_ = async (collectionName, data) => {
  try {
    const { uid } = auth.currentUser;

    const toSave = {
      ...data,
      Timestamp: Timestamp.now(),
      uid,
    };

    const newCityRef = doc(collection(db, 'cities'));
    console.log(newCityRef);

    // const document = await addDoc(collection(db, collectionName), {});

    // console.log('----', document.id);

    // return document;
  } catch (e) {
    console.log(e);
    return null;
  }
};
