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
  const productQuerySnapshot = await colRef.get();

  return cleanRecords(productQuerySnapshot);
};

//get a specific product
export const findProduct = async (id) => {
  const colRef = firestore.collection('products');
  const docRef = colRef.doc(id);
  const docSnap = await docRef.get();

  return cleanRecord(docSnap);
};

//get all the featured product list
export const getFeaturedProduct = async () => {
  const colRef = firestore.collection('products');

  const querySnap = await colRef.get();
  const clearedData = cleanRecords(querySnap);
  const featuredTrue = clearedData.filter(
    (featuredTrue) => featuredTrue.featured
  );

  return featuredTrue;
};
