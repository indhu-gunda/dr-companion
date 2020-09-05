import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBYyEDR34kzL2j33_q8GmHI8TBIfSVcJ7A',
  authDomain: 'dr-companion.firebaseapp.com',
  databaseURL: 'https://dr-companion.firebaseio.com',
  projectId: 'dr-companion',
  storageBucket: 'dr-companion.appspot.com',
  messagingSenderId: '135866182543',
  appId: '1:135866182543:ios:b8d8c7835b1f245917f9fa',
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };