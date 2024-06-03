import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBQLPX0drTiBNC6JRSaV-VIpzNLhPN6VMQ",
  authDomain: "teethcare-88f79.firebaseapp.com",
  projectId: "teethcare-88f79",
  storageBucket: "teethcare-88f79.appspot.com",
  messagingSenderId: "1035472265958",
  appId: "1:1035472265958:web:3759a56261145b7ba35127",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
