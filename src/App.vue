<template>
  <div id="app">
    <img src="./assets/logo.png">
    <ul>
      <li v-for="article in articles">{{ article | json}}</li>
    </ul>
    <hello></hello>
  </div>
</template>

<script>
import firebase from 'firebase'
import Hello from './components/Hello'

const config = {
    apiKey: "AIzaSyA-HlcV4jtbhB0sL2D74SK9RVH9oZIQgVU",
    authDomain: "js-fuseday-2016-stream.firebaseapp.com",
    databaseURL: "https://js-fuseday-2016-stream.firebaseio.com",
    storageBucket: "js-fuseday-2016-stream.appspot.com",
    messagingSenderId: "533084422648"
};

const firebaseApp = firebase.initializeApp(config);
const db = firebaseApp.database();

export default {
  name: 'app',
  firebase: {
    articles: db.ref('/stream')
  },
  components: {
    Hello
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
