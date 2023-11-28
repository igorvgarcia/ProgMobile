import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage'


// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyArrMLIL1DXTAlVfCitJQFEpI92t1Q96QI",
  authDomain: "mobile-6c1dd.firebaseapp.com",
  projectId: "mobile-6c1dd",
  storageBucket: "mobile-6c1dd.appspot.com",
  messagingSenderId: "138871814232",
  appId: "1:138871814232:web:01d44aa281c01f1c75322d"
};

  const app = initializeApp(firebaseConfig);
  const auth_mod = getAuth(app);
  const storage = getStorage(app)

export {auth_mod, app, storage}

