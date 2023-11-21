import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';


// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyBLrAOUrS95jeu6vqoHpY5bnfnYV_yetmo",
    authDomain: "progmobile-15766.firebaseapp.com",
    projectId: "progmobile-15766",
    storageBucket: "progmobile-15766.appspot.com",
    messagingSenderId: "983372598221",
    appId: "1:983372598221:web:f537b09407b8864e045284"
  };

  const app = initializeApp(firebaseConfig);
  const auth_mod = getAuth(app);

export {auth_mod, app}

