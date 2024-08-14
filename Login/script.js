// Import Firebase functions
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";

// Your Firebase configuration
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

// Handle form submission
const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  const email = form.querySelector('input[type="email"]').value;
  const password = form.querySelector('input[type="password"]').value;

  if (!email.includes('@vit.edu')) {
    alert('Please use your @vit.edu email address.');
    return;
  }

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log('User signed in:', user);
      alert('Sign-in successful!'); // Show an alert for successful sign-in
      window.location.href = '/dashboard/dashboard.html';
      // Redirect to another page or perform further actions
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error('Error signing in:', errorCode, errorMessage);
      alert('Error: ' + errorMessage); // Display error message to the user
    });
});
