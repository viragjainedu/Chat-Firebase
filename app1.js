
function writeUserData() {
  var database = firebase.database();

  var userId = "2";
  var name = "viragasdas3";
  var email = "aajasn3";
  // console.log(userId)
  // alert(userId)
  firebase.database().ref('users').set({
    name: name,
    email: email,
  });
}
// [END rtdb_write_new_user]
// function writeUserData() {
  
//   var chat = document.getElementById("text").value; 
  
//   console.log(chat)
//   firebase.database().ref('chats' + userId).set({
//     chat : chat
//   });

// }

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