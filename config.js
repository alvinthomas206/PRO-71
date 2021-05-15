import firebase from 'firebase';
require("@firebase/firestore")

  // Your web app's Firebase configuration
 const firebaseConfig = {
   apiKey: "AIzaSyBNzfRIXh3_pPZeiu80ojQL0S33sl_3Cfc",
    authDomain: "story-hub-8dd4a.firebaseapp.com",
    databaseURL: "https://story-hub-8dd4a-default-rtdb.firebaseio.com",
    projectId: "story-hub-8dd4a",
    storageBucket: "story-hub-8dd4a.appspot.com",
    messagingSenderId: "1085820617581",
    appId: "1:1085820617581:web:67bf034472bbb9d6811064"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()