import { initializeApp } from 'firebase/app';
import { getAuth, RecaptchaVerifier } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyAadgg0KQsQ61-9GERCKhFcl0cEDOYQi4I",
    authDomain: "test-5b7d0.firebaseapp.com",
    projectId: "test-5b7d0",
    storageBucket: "test-5b7d0.appspot.com",
    messagingSenderId: "783366821525",
    appId: "1:783366821525:web:86dcbcab55acf43d0bed9c",
    measurementId: "G-WT9RZ74FNG"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);


export default auth;
