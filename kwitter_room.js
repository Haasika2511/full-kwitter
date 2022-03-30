const firebaseConfig = {
  apiKey: "AIzaSyCULmn0ZV3TCDhBxaxfKhfDPQg_5CNbxNg",
  authDomain: "kwitter-2-c598c.firebaseapp.com",
  databaseURL: "https://kwitter-2-c598c-default-rtdb.firebaseio.com",
  projectId: "kwitter-2-c598c",
  storageBucket: "kwitter-2-c598c.appspot.com",
  messagingSenderId: "448052433579",
  appId: "1:448052433579:web:6b93453618dc414eef5dee"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom() {
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    purpose: "adding room name"
  });
  localStorage.setItem("room_name", room_name);
  window.location = "kwitter_page.html";
}

function getData() {
  firebase.database().ref("/").on('value', function (snapshot) {
    document.getElementById("output").innerHTML = ""; 
    snapshot.forEach(function (childSnapshot) {
      childKey = childSnapshot.key;
      Room_names = childKey;
      //Start code
console.log("room name-"+Room_names);
row='<div class="room_name" id="'+Room_names+'onclick="redirectToRoomName(this.id)">'+Room_names+'</div><hr>';
document.getElementById("output").innerHTML=row;
      //End code
    });
  });
}
getData();
function redirectToRoomName(name){
  console.log(name);
  localStorage.setItem("room_name".name);
  window.location="kwitter_page.html";
}
function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location="index.html";
}