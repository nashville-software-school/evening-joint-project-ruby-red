define(["jquery", "firebase", "get-users", "homepage"], function($, firebase, getUsers, homepage) {

return {
	createUser: function(firebaseRef, newUser) {
    var userEmail = $("#emailInput").val();
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
          "username": $('#usernameInput').val(),
          "monsterType": monsterType,
          "imageURL": $('#imgInput').val(),
          "hauntCount": 0
        };
        firebaseRef.child('users').push(newUser);
        $("#loginRegister").show();
        $("#loginRegister").prepend("<h3><b>You have been successfully registered. Please sign in with your new username and password.<b><h3>");
        $("#register").hide();
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
        getUsers.load(homepage.load);
        $("#loginRegister").hide();
        $("#loginUsername").val('');
        $("#loginPassword").val('');
      }
	  });
	}
};
});