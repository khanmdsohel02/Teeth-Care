import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.REACT_APP_FIREBASE_apiKey,
  authDomain: import.meta.env.REACT_APP_FIREBASE_authDomain,
  projectId: import.meta.env.REACT_APP_FIREBASE_projectId,
  storageBucket: import.meta.env.REACT_APP_FIREBASE_storageBucket,
  messagingSenderId: import.meta.env.REACT_APP_FIREBASE_messagingSenderId,
  appId: import.meta.env.REACT_APP_FIREBASE_appId,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
