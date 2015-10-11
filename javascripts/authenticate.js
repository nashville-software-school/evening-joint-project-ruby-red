define(["jquery", "firebase"], function($, firebase) {

return {
	createUser: function(firebaseRef, newUser) {
		var userEmail = $("#usernameInput").val();
    firebaseRef.createUser({
      email: userEmail,
      password: $("#passwordInput").val()
    }, function(error, userData) {
      if (error) {
        console.log("Error creating user:", error);
      } else {
        console.log("Successfully created user with uid:", userData.uid);
        //capture value of monster-type
        var monsterType = $(".monsterOpt[type='radio']:checked").val();
        //use userData.uid to create user object in Firebase
        newUser = {
        	"uid": userData.uid,
          "email": userEmail,
        	"username": '',
        	"monster-type": monsterType,
        	"imageURL": "",
        	"haunt-count": 0
        };
        firebaseRef.child('users').push(newUser);
      }
    });
	},
	logInUser: function(firebaseRef) {
		firebaseRef.authwithPassword({
      email: $("#usernameInput").val(),
      password: $("#passwordInput").val()
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