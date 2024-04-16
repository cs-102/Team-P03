  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
  import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-database.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDgB8UNAWD4wBR9IlHA1I3K8S9CJBLI1lI",
    authDomain: "goa-explorer-hub.firebaseapp.com",
    projectId: "goa-explorer-hub",
    storageBucket: "goa-explorer-hub.appspot.com",
    messagingSenderId: "991456102564",
    appId: "1:991456102564:web:90888b99f7932df835be31"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const db = getDatabase(app);

  document.getElementById("submit").addEventListener('click', function(e){
    set(ref(db, 'user/' + document.getElementById("Username").value),
    {    
        Username: document.getElementById("Username").value
    });
     alert("Login Successful  !")
  })
