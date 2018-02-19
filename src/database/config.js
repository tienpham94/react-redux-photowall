import * as firebase from 'firebase'
var config = {
    apiKey: "AIzaSyCZ7I0nqfeRO1gp5wSE7ZjjBw1W_WWopjw",
    authDomain: "photowall-c9aa2.firebaseapp.com",
    databaseURL: "https://photowall-c9aa2.firebaseio.com",
    projectId: "photowall-c9aa2",
    storageBucket: "photowall-c9aa2.appspot.com",
    messagingSenderId: "938539853915"
  };

  firebase.initializeApp(config)

  const database = firebase.database()

  export {database}
