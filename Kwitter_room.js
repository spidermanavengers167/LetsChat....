var firebaseConfig = {
    apiKey: "AIzaSyANErtwa557nSIjOBLm9NPUBsnl7neYEXc",
    authDomain: "chaton-ed542.firebaseapp.com",
    projectId: "chaton-ed542",
    storageBucket: "chaton-ed542.appspot.com",
    messagingSenderId: "1014426116692",
    appId: "1:1014426116692:web:32da33c5492a6f6f71c3c1"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+user_name
function addRoom (){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            Purpose:"Adding a Room Name"
      })
      room_name=localStorage.setItem("room_name",room_name)
      window.location="Kwitter_room.html"
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
  Room_names = childKey;
 //Start code
row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>"+Room_names+" </div> <hr>"
document.getElementById("output").innerHTML+=row
 //End code
 });});}
getData();
function redirectToRoomName(name){
localStorage.setItem("room_name",name)
window.location="kwitter_room.html"
}
function logout(){
  localStorage.removeItem("user_name")
  localStorage.removeItem("user_name")
  window.location="index.html"
}