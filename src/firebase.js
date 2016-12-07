import firebase from 'firebase';
import pubsub from 'minpubsub';
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

  const arr = Object.values(data.val()).map(({
    uuid,
    title,
    url,
    thread: { main_image: picture},
    text,
    author,
    published
  }) => {
    return {uuid, title, url, picture, text, author, published};
  });

  await db.articles.bulkPut(arr);
  //publish('/articles/update')
}

init();

console.log(pubsub)

// db.ref('/stream_2')
//   .orderByChild('page')
//   .on('child_added', function(snapshot) {
//   console.log(snapshot.val());
// });

