const loginForm = document.getElementById("loginform");

loginForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById("Username").value;
    const password = document.getElementById("Password").value;

    firebase.auth().signInWithEmailAndPassword(username, password)
        .then((userCredential) => {
            // Redirect to home page upon successful login
            window.location.href = "/home.html";
        })
        .catch((error) => {
            const errorMessage = error.message;
            alert("Error occurred: " + errorMessage);
        });
});


