import * as firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCFhkcL4j62ghiFVNrdJ1FwPbheUAmoiBQ",
    authDomain: "dev-dcu-x.firebaseapp.com",
    databaseURL: "https://dev-dcu-x.firebaseio.com",
    projectId: "dev-dcu-x",
    storageBucket: "dev-dcu-x.appspot.com",
    messagingSenderId: "149550980919",
    appId: "1:149550980919:web:466ab1df962d9881b5c4b2",
    measurementId: "G-KQ1J6JB4W7"
};
// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const storage = firebase.storage();
const db = firebase.firestore();
const auth = firebase.auth();
const timestamp = firebase.firestore.FieldValue.serverTimestamp();

export { storage, db, auth, timestamp }