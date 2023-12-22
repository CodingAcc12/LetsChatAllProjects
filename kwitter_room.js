
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyCavf91eO07xsmAUztxZjXy9BS9BZTQEEY",
      authDomain: "letschat3-93a26.firebaseapp.com",
      databaseURL: "https://letschat3-93a26-default-rtdb.firebaseio.com",
      projectId: "letschat3-93a26",
      storageBucket: "letschat3-93a26.appspot.com",
      messagingSenderId: "202241605347",
      appId: "1:202241605347:web:4fd0fcf4b04ab6f48b4fd6"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    username=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="welcome "+ username+ "!";

    function addroom() {
      roomname=document.getElementById("room_name").value ;
      firebase.database().ref("/").child(roomname).update({
            purpose:"adding room name"
      }) 
      localStorage.setItem("roomname",roomname);
      window.location="kwitter_page.html"
    }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
row="<div class='room_name' id='"+Room_names+"' onclick='redirectToRoomName(this.id)' >#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();

function redirectToRoomName(name){
      localStorage.setItem("roomname",name);
      window.location="kwitter_page.html";
}
function logout() {
      localStorage.removeItem("roomname");
      localStorage.removeItem("username");
      window.location="index.html"
}