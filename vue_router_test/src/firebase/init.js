import firebase from "firebase"
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: process.env.VUE_APP_FIREBASE_KEY,
    authDomain: "gihoon-a95d2.firebaseapp.com",
    databaseURL: "https://gihoon-a95d2.firebaseio.com",
    projectId: "gihoon-a95d2",
    storageBucket: "gihoon-a95d2.appspot.com",
    messagingSenderId: "999843456117",
    appId: "1:999843456117:web:62ffd5193cc23f28b2443c",
    measurementId: "G-HXKCKHVXD3"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

firebaseApp.firestore().collection('todos')

export default firebaseApp.firestore();