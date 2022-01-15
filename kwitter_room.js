//ADD YOUR FIREBASE LINKS HERE

const firebaseConfig = {
    apiKey: "AIzaSyAngwYVXVsTrs7RvaZiqZOVqKHcNzTnIsA",
    authDomain: "kwitter-e5cb4.firebaseapp.com",
    databaseURL: "https://kwitter-e5cb4-default-rtdb.firebaseio.com",
    projectId: "kwitter-e5cb4",
    storageBucket: "kwitter-e5cb4.appspot.com",
    messagingSenderId: "145381506908",
    appId: "1:145381506908:web:4ad136f57bc14cb4af8b99"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();

