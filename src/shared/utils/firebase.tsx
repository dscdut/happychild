import { initializeApp, FirebaseOptions } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig: FirebaseOptions = {
  apiKey: 'AIzaSyDcxUIX65MB8oUgnjH4aHwQJuE7vCcbtcM',
  authDomain: 'chemical-equation-2ada6.firebaseapp.com',
  projectId: 'chemical-equation-2ada6',
  storageBucket: 'chemical-equation-2ada6.appspot.com',
  messagingSenderId: '271204846946',
  appId: '1:271204846946:web:64b9099fa1c1f73df0303b',
  databaseURL: 'https://chemical-equation-2ada6-default-rtdb.firebaseio.com/',
};

const app = initializeApp(firebaseConfig);
export const realTimeDatabase = getDatabase(app);

export default app;
