import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyB_eqCeqpPfQbpT9EuEVtXNgDxRSGn_OBY',
  authDomain: 'devils-wear.firebaseapp.com',
  projectId: 'devils-wear',
  storageBucket: 'devils-wear.appspot.com',
  messagingSenderId: '681564522826',
  appId: '1:681564522826:web:3da23b0593929d382559b3',
};
firebase.initializeApp(firebaseConfig);
// Initialize Firebase
const firestore = firebase.firestore();
export default firestore;
