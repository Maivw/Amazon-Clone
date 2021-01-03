import firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyAuPMaSRN6-4cVbBslAwJ3vilBe-rV6KK4",
	authDomain: "challenge-99739.firebaseapp.com",
	projectId: "challenge-99739",
	storageBucket: "challenge-99739.appspot.com",
	messagingSenderId: "430776731150",
	appId: "1:430776731150:web:7ad3bfd49f65d1334ede5f",
	measurementId: "G-CC0T15K58Z",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
