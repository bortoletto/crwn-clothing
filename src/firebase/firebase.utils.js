import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: 'AIzaSyCxLGIcOsXZgjYpeWJ2id1R1bfHWnLixWc',
	authDomain: 'crwn-db-99ca7.firebaseapp.com',
	databaseURL: 'https://crwn-db-99ca7.firebaseio.com',
	projectId: 'crwn-db-99ca7',
	storageBucket: '',
	messagingSenderId: '969502842731',
	appId: '1:969502842731:web:ae9e584fb173e4be'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
