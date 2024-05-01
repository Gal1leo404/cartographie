import firebase from 'firebase/compat/app';
import 'firebase/compat/database';

const firebaseConfig = {
    apiKey: "AIzaSyBowpchkhiZi33fhm9DmLBE9jqKx_tSKyc",
    authDomain: "cartographie-52e66.firebaseapp.com",
    databaseURL: "https://cartographie-52e66-default-rtdb.firebaseio.com",
    projectId: "cartographie-52e66",
    storageBucket: "cartographie-52e66.appspot.com",
    messagingSenderId: "1058748637174",
    appId: "1:1058748637174:web:3381e83c1ad7efdefa31d7",
    measurementId: "G-DZ7NJXES4S"
};

firebase.initializeApp(firebaseConfig);

export const dataRef=firebase.database()
export default firebase
