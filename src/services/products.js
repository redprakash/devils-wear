import firestore from './firestore';
const cleanRecord = (docSnapshot) => ({
  id: docSnapshot.id,
  ...docSnapshot.data(),
});

const cleanRecords = (querySnapshot) => {
  return querySnapshot.docs.map(cleanRecord);
};
//get all the products list
export const getProducts = async () => {
  const colRef = firestore.collection('products');
  const productSnapshot = await colRef.get();
  return cleanRecords(productSnapshot);
};
