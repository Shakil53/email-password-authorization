// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAXIJ3JaXxNaXqm1MDWVSoej2HVKyIcm84",
    authDomain: "email-password-authorization.firebaseapp.com",
    projectId: "email-password-authorization",
    storageBucket: "email-password-authorization.appspot.com",
    messagingSenderId: "147010674765",
    appId: "1:147010674765:web:b9bf7176ae5937c2253c04"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;