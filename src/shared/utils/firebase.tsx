import { initializeApp, FirebaseOptions } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

const firebaseConfig: FirebaseOptions = {
  apiKey: 'AIzaSyCl1xM5PryrwJzYveYxexoa9mPyj1P7URU',
  authDomain: 'gdsc-happychild.firebaseapp.com',
  databaseURL: 'https://gdsc-happychild-default-rtdb.firebaseio.com',
  projectId: 'gdsc-happychild',
  storageBucket: 'gdsc-happychild.appspot.com',
  messagingSenderId: '1093276526033',
  appId: '1:1093276526033:web:216b59b211983fa85becf0',
  measurementId: 'G-LK1BRHPMXD',
};

const app = initializeApp(firebaseConfig);
export const realTimeDatabase = getDatabase(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export default app;
