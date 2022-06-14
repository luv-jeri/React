import { collection, query, where, getDocs } from 'firebase/firestore';
import { db, auth } from '../firebase';

export const queryWithDet = async (collectionName, condition) => {
  // ~ Creating a reference to the collection
  const collectionRef = collection(db, collectionName);
  // ~ Getting the user's uid from auth object
  const { uid } = auth.currentUser;

  // # Creating a query for uid == "uid"
  const q = query(collectionRef, where(condition.filed, condition.op, condition.value));

  // # Getting the documents which match the query
  const querySnapshot = await getDocs(q);

  // ~ Looping through the documents [because we can get many documents from the query]
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, ' => ', doc.data());
  });
};
