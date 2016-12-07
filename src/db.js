import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyA-HlcV4jtbhB0sL2D74SK9RVH9oZIQgVU",
  authDomain: "js-fuseday-2016-stream.firebaseapp.com",
  databaseURL: "https://js-fuseday-2016-stream.firebaseio.com",
  storageBucket: "js-fuseday-2016-stream.appspot.com",
  messagingSenderId: "533084422648"
};

const firebaseApp = firebase.initializeApp(config);
const db = firebaseApp.database();

export default db;
