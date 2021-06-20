import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyCv9feRN1wjjPAYNqwJtS1p2E1dObFqGxU",
  authDomain: "fir-login-b08fd.firebaseapp.com",
  databaseURL: "https://fir-login-b08fd-default-rtdb.firebaseio.com",
  projectId: "fir-login-b08fd",
  storageBucket: "fir-login-b08fd.appspot.com",
  messagingSenderId: "971701420977",
  appId: "1:971701420977:web:7fd4b63e5f9b6857f13390"
};
// Initialize Firebase

  
  const FireData= firebase.initializeApp(firebaseConfig);

  export default FireData.database().ref();