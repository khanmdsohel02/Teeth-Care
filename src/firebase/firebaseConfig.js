import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyBQLPX0drTiBNC6JRSaV-VIpzNLhPN6VMQ",
//   authDomain: "teethcare-88f79.firebaseapp.com",
//   projectId: "teethcare-88f79",
//   storageBucket: "teethcare-88f79.appspot.com",
//   messagingSenderId: "1035472265958",
//   appId: "1:1035472265958:web:3759a56261145b7ba35127",
// };

console.log(import.meta.env.VITE_FIREBASE_API_KEY);

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
