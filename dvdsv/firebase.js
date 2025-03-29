// Modal functionality
const modal = document.getElementById('authModal');
const span = document.getElementsByClassName("close")[0];

// When user clicks auth links
document.querySelectorAll('[href="#authModal"]').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        modal.style.display = "block";
    });
});

// When user clicks close
span.onclick = function() {
    modal.style.display = "none";
}

// When user clicks outside modal
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Auth functions
document.getElementById("registerBtn").addEventListener("click", () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
            document.getElementById("status").innerText = "Registration Successful!";
            modal.style.display = "none";
        })
        .catch(error => alert(error.message));
});

document.getElementById("loginBtn").addEventListener("click", () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    signInWithEmailAndPassword(auth, email, password)
        .then(() => {
            modal.style.display = "none";
            window.location.reload();
        })
        .catch(error => alert(error.message));
});

// Password toggle
window.togglePassword = function() {
    const passwordInput = document.getElementById("password");
    passwordInput.type = passwordInput.type === "password" ? "text" : "password";
}
// firebase-config.js
export const firebaseConfig = {
    apiKey: "AIzaSyC3PibIJKSG6qIUqN3c90zXvv0gy1Fdz10",
    authDomain: "hostel-zone.firebaseapp.com",
    projectId: "hostel-zone",
    storageBucket: "hostel-zone.appspot.com",
    messagingSenderId: "86399762110",
    appId: "1:86399762110:web:95a0f8b35bf14c042e68ef",
    measurementId: "G-5WKDWLYSQF"
  };