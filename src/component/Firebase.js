import firebase from 'firebase';

/*var firebaseConfig = {
  apiKey: "AIzaSyCv9feRN1wjjPAYNqwJtS1p2E1dObFqGxU",
  authDomain: "fir-login-b08fd.firebaseapp.com",
  projectId: "fir-login-b08fd",
  storageBucket: "fir-login-b08fd.appspot.com",
  messagingSenderId: "971701420977",
  appId: "1:971701420977:web:7fd4b63e5f9b6857f13390"
};*/
var firebaseConfig = {
  apiKey: "AIzaSyBMOfCseJHdvygsmWtu3lzOUSOgUcmVHTw",
  authDomain: "fir-crud-1d865.firebaseapp.com",
  databaseURL: "https://fir-crud-1d865-default-rtdb.firebaseio.com",
  projectId: "fir-crud-1d865",
  storageBucket: "fir-crud-1d865.appspot.com",
  messagingSenderId: "113760401195",
  appId: "1:113760401195:web:b1a2ef51fb61d75e55776e"
};

  // Initialize Firebase
  const Fire= firebase.initializeApp(firebaseConfig);

  export default Fire.database().ref();