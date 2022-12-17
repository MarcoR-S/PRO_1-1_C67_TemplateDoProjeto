import firebase from 'firebase';


const firebaseConfig = {
  apiKey: "AIzaSyD8nIRaRf6fMrnwF_H0f1RPDjBaTGL9dSo",
  authDomain: "votacao-eb334.firebaseapp.com",
  projectId: "votacao-eb334",
  storageBucket: "votacao-eb334.appspot.com",
  messagingSenderId: "896118972256",
  appId: "1:896118972256:web:fe7d97d8bc0c5ab7e30805"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

var firebaseConfig = {

};
// Initialice o Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
