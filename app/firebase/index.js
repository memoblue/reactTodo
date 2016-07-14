import firebase from 'firebase';

try {
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyB-O952KDFCq-BDPvFOk2n-fko6Q3vuy6E",
    authDomain: "memotodo-38e5a.firebaseapp.com",
    databaseURL: "https://memotodo-38e5a.firebaseio.com",
    storageBucket: "memotodo-38e5a.appspot.com",
  };
  firebase.initializeApp(config);
} catch (e) {

}

export var fbRef = firebase.database().ref();
export default firebase; // so we can import only this file elsewhere
