import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: 'AIzaSyDldmzaJrEGktpeaX081R0X1kGLFdDv7LE',
	authDomain: 'crnw-clothing.firebaseapp.com',
	databaseURL: 'https://crnw-clothing.firebaseio.com',
	projectId: 'crnw-clothing',
	storageBucket: '',
	messagingSenderId: '516252016039',
	appId: '1:516252016039:web:53081f1c12838eba'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
