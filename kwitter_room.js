
const firebaseConfig = {
    apiKey: "AIzaSyBMeywd_A2Bi2thBHnGVGq8z99iynGBGYw",
    authDomain: "kwitter-20177.firebaseapp.com",
    databaseURL: "https://kwitter-20177-default-rtdb.firebaseio.com",
    projectId: "kwitter-20177",
    storageBucket: "kwitter-20177.appspot.com",
    messagingSenderId: "406469626392",
    appId: "1:406469626392:web:ac0b282355539fd17ed16d"
  };
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function add_room(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "add room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}

function getData() {
      firebase.database().ref("/").on('value', function(snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function(childSnapshot) {
                  childKey  = childSnapshot.key;
                  Room_names = childKey;
                  console.log("room_name " + Room_names);
                  row = "<div class = 'room_name' id = "+ Room_names + " onclick = 'redirect_to_room_name(this.id)'>#" + Room_names + "</div> <hr>";
                  document.getElementById("output").innerHTML += row ;
            });
      });
}
getData();

function redirect_to_room_name(name){
      console.log("name");
      localStorage.setItem("room_name",name);
      window.location = "kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}