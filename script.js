import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCINpavU6BB-7O5ZTwokJA9B42Z9k3yhE0",
  authDomain: "login-web-fa521.firebaseapp.com",
  projectId: "login-web-fa521",
  storageBucket: "login-web-fa521.appspot.com",
  messagingSenderId: "999104397982",
  appId: "1:999104397982:web:69e1ce7d6f869bb4f8718f",
  measurementId: "G-P8XEG3XJVY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.getElementById('login-btn').addEventListener('click', () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Login berhasil
            window.location.href = "profile.html";
        })
        .catch((error) => {
            document.getElementById('message').innerText = error.message;
        });
});

document.getElementById('register-btn').addEventListener('click', () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Registrasi berhasil
            document.getElementById('message').innerText = "Account created successfully!";
        })
        .catch((error) => {
            document.getElementById('message').innerText = error.message;
        });
});

onAuthStateChanged(auth, (user) => {
    if (user) {
        // Jika sudah login, arahkan ke halaman profil
        window.location.href = "profile.html";
    }
});
