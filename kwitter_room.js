const firebaseConfig = {
      apiKey: "AIzaSyB1cF3W7YVdtwKZcRFAbZGCumvw2CYMWG4",
      authDomain: "project-1-b686a.firebaseapp.com",
      databaseURL: "https://project-1-b686a-default-rtdb.firebaseio.com",
      projectId: "project-1-b686a",
      storageBucket: "project-1-b686a.appspot.com",
      messagingSenderId: "678386869212",
      appId: "1:678386869212:web:255952c8ed77853151a519",
      measurementId: "G-ESBRKGLLR0"
    };
    
      firebase.initializeApp(firebaseConfig);
    
    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
    
    function addRoom()
    {
      room_name = document.getElementById("room_name").value;
    
      firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"
      });
    
        localStorage.setItem("room_name", room_name);
        
        window.location = "kwitter_page.html";
    }
    
    function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
           Room_names = childKey;
           console.log("Room Name - " + Room_names);
          row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
          document.getElementById("output").innerHTML += row;
        });
      });
    
    }
    
    getData();
    
    function redirectToRoomName(name)
    {
      console.log(name);
      localStorage.setItem("room_name", name);
        window.location = "kwitter_page.html";
    }
    
    function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
        window.location = "index.html";
    }