
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyA_n2YeNWIoR-UtX85Hdo75aRqAMZNU_ew",
        authDomain: "playzone-2dbd1.firebaseapp.com",
        databaseURL: "https://playzone-2dbd1.firebaseio.com",
        projectId: "playzone-2dbd1",
        storageBucket: "playzone-2dbd1.appspot.com",
        messagingSenderId: "1094159429361",
        appId: "1:1094159429361:web:9a8cb49d0a7f71c530c350",
        measurementId: "G-JTNP495097"
});

const auth = firebase.auth();

export { auth };