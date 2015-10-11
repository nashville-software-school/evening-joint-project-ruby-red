define(["jquery", "firebase"], function($, firebase) {

return {
	createUser: function(firebaseRef, newUser) {
    var userEmail = $("#usernameInput").val();
    firebaseRef.createUser({
      'email': userEmail,
      'password': $("#passwordInput").val()
    }, function(error, userData) {
      if (error) {
        console.log("Error creating user:", error);
      } else {
        console.log("Successfully created user with uid:", userData.uid);
        //capture value of monster-type
        var monsterType = $(".monsterOpts[type='radio']:checked").val();
        //use userData.uid to create user object in Firebase
        newUser = {
          "uid": userData.uid,
          "email": userEmail,
          "username": 'Frankenstein',
          "monster-type": monsterType,
          "imageURL": "https://upload.wikimedia.org/wikipedia/commons/a/a7/Frankenstein's_monster_(Boris_Karloff).jpg",
          "haunt-count": 0
        };
        firebaseRef.child('users').push(newUser);
      }
    });
  },
  logInUser: function(firebaseRef) {
		firebaseRef.authWithPassword({
      'email': $("#loginUsername").val(),
      'password': $("#loginPassword").val()
    }, function(error, authData) {
      if (error) {
        console.log("Login Failed!", error);
      } else{
        console.log("Authenticated successfully with payload:", authData);
      }
	  });
	}
};
});