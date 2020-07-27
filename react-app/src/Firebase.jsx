import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyCLfkt_E5JoulV_2e7LeJpk0ckbnbFQ7B0",
  authDomain: "fir-auth-5411e.firebaseapp.com",
  databaseURL: "https://fir-auth-5411e.firebaseio.com",
  projectId: "fir-auth-5411e",
  storageBucket: "fir-auth-5411e.appspot.com",
  messagingSenderId: "473987010526",
  appId: "1:473987010526:web:c1a47f04b200045fdc174f",
  measurementId: "G-64ZGY1BPLZ",
};
// Initialize Firebase
export const fire = firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
