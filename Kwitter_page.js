var firebaseConfig = {
    apiKey: "AIzaSyD_VGzfnsJxvu9ytnSaae-ncTjr_PjRlbc",
    authDomain: "kwitter-45f02.firebaseapp.com",
    databaseURL: "https://kwitter-45f02-default-rtdb.firebaseio.com",
    projectId: "kwitter-45f02",
    storageBucket: "kwitter-45f02.appspot.com",
    messagingSenderId: "580699385341",
    appId: "1:580699385341:web:3f043ae0ce540db595fd94"
  };
  
  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
 user_name=localStorage.getItem("user_name")
 room_name=localStorage.getItem("room_name")
 function send(){
    msg=document.getElementById("msg").value
    firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
    })
    document.getElementById("msg").value=""
 }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();
