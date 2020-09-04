import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAAwmhhU06mgh6xxY3B-KJTYu8kDMtPKEY',
  authDomain: 'react-native-firebase-indhu.firebaseapp.com',
  databaseURL: 'https://react-native-firebase-indhu.firebaseio.com',
  projectId: 'react-native-firebase-indhu',
  storageBucket: 'react-native-firebase-indhu.appspot.com',
  messagingSenderId: '799641403720',
  appId: '1:799641403720:ios:ffa10423904fec8813f37d',
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };