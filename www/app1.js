var sender = prompt('Enter ur name')
document.getElementById('name').innerHTML += sender

function sendMessage(){
  var msg = document.getElementById('text').value;
  firebase.database().ref("messages").push().set({
    sender: sender,
    msg: msg,
    time: '0' 
  })
}

var database = firebase.database().ref();

  firebase.database().ref('messages').on('child_added' , function(snapshot){
    var html = ""
    var msg = snapshot.val().msg;
    var sender = snapshot.val().sender;
    var time = snapshot.val().time;
    console.log(msg,sender,time)
    document.getElementById('chats').innerHTML += '<p>'+msg + '(sent by-'+ sender +')' + '</p>';
  });

function readUserData() {
  var database = firebase.database().ref();
  // var chat = document.getElementById("text").value; 
  // var users = database.ref().child('users');
  console.log('hii')
  alert('hi')
  database.child("users").child("userID").get().then(function(snapshot) {
    alert('hi2')
    if (snapshot.exists()) {
      console.log(snapshot.val());
    }
    else {
      console.log("No data available");
    }
  }).catch(function(error) {
    console.error(error);
  });

}



function googleSignInPopup(provider) {
  var provider = new firebase.auth.GoogleAuthProvider();

  // [START auth_google_signin_popup]
  firebase.auth()
    .signInWithPopup(provider)
    .then((result) => {
      /** @type {firebase.auth.OAuthCredential} */
      var credential = result.credential;

      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = credential.accessToken;
      // The signed-in user info.
      var user = result.user;

      alert(credential)
      alert(user)
      alert(token)
      window.location.assign('/chat.html')
      // ...
    }).catch((error) => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
  // [END auth_google_signin_popup]
}

function googleSignInOut(provider) {
  var provider = new firebase.auth.GoogleAuthProvider();

  firebase.auth().signOut().then(() => {
  
    window.location.assign('/login1.html')
  
  }).catch((error) => {
    // An error happened.
  });

}