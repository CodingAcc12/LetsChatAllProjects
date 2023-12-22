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
username= localStorage.getItem("user_name");
roomname= localStorage.getItem("roomname")
function  send() {
      msg=document.getElementById("msg").value ;
      firebase.database().ref(roomname).push({
            name:username,
            message:msg,like:0
      })
      document.getElementById("msg").value="";
}
function getData() { firebase.database().ref("/"+roomname).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name=message_data["name"];
message=message_data["message"];
like=message_data["like"];
name_with_tag="<h4>"+ name + "<img class='user_tick' src='tick.png'> </h4>";
message_with_tag="<h4 class='message_h4'>"+message+"</h4>";
like_button="<button class='btn btn-warning' id="+ firebase_message_id+ " value="+ like+ " onclick='updatelike(this.id)' >";
span_width_tag="<span class='glyphicon glyphicon-thumbs-up'> like: "+ like + "</span> </button> <hr>";
row=name_with_tag+message_with_tag+ like_button + span_width_tag;
document.getElementById("output").innerHTML+=row;


//End code
      } });  }); }
getData();
function updatelike(id) {
      console.log("clicked on the liked button-"+id);
      button_id=id;
      likes=document.getElementById(button_id).value;
      updated_likes=Number(likes)+1;
      firebase.database().ref(roomname).child(id).update({
            like:updated_likes
      })
}
function logout() {
      localStorage.removeItem("roomname");
      localStorage.removeItem("username");
      window.location="index.html"
}