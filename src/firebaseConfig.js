import firebase from "firebase";

// the firebase congiguration variable
var firebaseConfig = {
  apiKey: "AIzaSyBfU92V2Se2sd1kKsqQyDIiRyz0fYj4MLU",
  authDomain: "fir-employees-ef7a0.firebaseapp.com",
  projectId: "fir-employees-ef7a0",
  storageBucket: "fir-employees-ef7a0.appspot.com",
  messagingSenderId: "229159394245",
  appId: "1:229159394245:web:616e94971f6b26115609ac",
  measurementId: "G-K9TTBXDG6B",
};

// initialise the firebase module with the configuration variable

firebase.initializeApp(firebaseConfig);

// use the firebase database service called firestore and assign it to a variable that
// you have to export
export const db = firebase.firestore();
