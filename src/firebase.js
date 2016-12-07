import firebase from 'firebase'
import db from './db';

const config = {
  apiKey: "AIzaSyA-HlcV4jtbhB0sL2D74SK9RVH9oZIQgVU",
  authDomain: "js-fuseday-2016-stream.firebaseapp.com",
  databaseURL: "https://js-fuseday-2016-stream.firebaseio.com",
  storageBucket: "js-fuseday-2016-stream.appspot.com",
  messagingSenderId: "533084422648"
};

const app = firebase.initializeApp(config);
const appDb = app.database();

async function init() {
  const data = await appDb.ref('/stream_2')
    .orderByChild('page')
    .limitToLast(10)
    .once('value');

  const arr = Object.values(data.val()).map(item => {
    const {uuid, title, url, text, author, published} = item;

    return {
      uuid, title, url, text, author, published
    }
  });

  db.articles.bulkPut(arr);
}

init();

// db.ref('/stream_2')
//   .orderByChild('page')
//   .on('child_added', function(snapshot) {
//   console.log(snapshot.val());
// });

