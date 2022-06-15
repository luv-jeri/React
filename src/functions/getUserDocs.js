import { collection, query, where, getDocs } from 'firebase/firestore';
import { db, auth } from '../firebase';

export const getUserDocs = async (collectionName, callback) => {
  const data = [];
  // ~ Creating a reference to the collection
  const collectionRef = collection(db, collectionName);

  // ~ Getting the user's uid from auth object
  const { uid } = auth.currentUser;

  // # Creating a query for uid == "uid"
  const q = query(collectionRef, where('uid', '==', uid));

  // # Getting the documents which match the query
  const querySnapshot = await getDocs(q);

  // ~ Looping through the documents [because we can get many documents from the query]
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    data.push(doc.data());
  });

  // FIXME - Explain &&
  callback && callback(data);

  return data;
};
