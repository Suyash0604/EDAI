
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getAuth, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";


const firebaseConfig = {
  apiKey: "AIzaSyCbTA4rCu2XyTfmMzSehuvHeuFvVubScCw",
  authDomain: "testing-bdfb4.firebaseapp.com",
  databaseURL: "https://testing-bdfb4-default-rtdb.firebaseio.com",
  projectId: "testing-bdfb4",
  storageBucket: "testing-bdfb4.appspot.com",
  messagingSenderId: "710607401354",
  appId: "1:710607401354:web:f7c65f979169f682585873",
  measurementId: "G-DF9HL1CBDY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Handle form submission for forgot password
const form = document.getElementById('forgot-password-form');
form.addEventListener('submit', (event) => {
  event.preventDefault();

  const email = form.querySelector('input[type="email"]').value;

  sendPasswordResetEmail(auth, email)
    .then(() => {
      alert('An OTP has been sent to your email. Please check your inbox to reset your password.');
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error('Error sending password reset email:', errorCode, errorMessage);
      alert('Error: ' + errorMessage); 
    });
});
