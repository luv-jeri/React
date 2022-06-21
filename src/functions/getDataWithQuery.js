import { collection, query, where, getDocs } from 'firebase/firestore';
import { db, auth } from '../firebase';

export const getDataWithQuery = async (collectionName, condition) => {
  // ~ Creating a reference to the collection
  const collectionRef = collection(db, collectionName);
  const data = [];
  // ~ Getting the user's uid from auth object
  const { uid } = auth.currentUser;

  // # Creating a query for uid == "uid"
  const q = query(
    collectionRef,
    where(condition.field, condition.op, condition.value),
    where('uid', '==', uid)
  );

  // # Getting the documents which match the query
  const querySnapshot = await getDocs(q);

  // ~ Looping through the documents [because we can get many documents from the query]
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    data.push(doc.data());
  });
  return data;
};
