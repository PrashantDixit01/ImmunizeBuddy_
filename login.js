console.log('prashantdxit');

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getAuth,createusernameWithAndPassword } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyCUt9aG_bimw_WjGyw9uOKMbfojk6hDhLU",
    authDomain: "immunizebuddy-7a0f7.firebaseapp.com",
    projectId: "immunizebuddy-7a0f7",
    storageBucket: "immunizebuddy-7a0f7.appspot.com",
    messagingSenderId: "49391539844",
    appId: "1:49391539844:web:3ca2e0a606533b9a52d4d1",
    measurementId: "G-F4ERZRKJWT"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

SubmitData.addEventListener('click', (e) => {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;


    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;

            alert('Created user Successfully')
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;

            alert('error message')
        });

})