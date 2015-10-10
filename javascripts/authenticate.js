define(["jquery", "firebase"], function($, firebase) {

return {
	createUser: function(firebaseRef, newUser) {
		firebaseRef.createUser({
      email: $("#usernameInput").val(),
      password: $("#passwordInput").val()
    }, function(error, userData) {
      if (error) {
        console.log("Error creating user:", error);
      } else {
        console.log("Successfully created user with uid:", userData.uid);
        //capture value of monster-type
        var monsterType = $("#monster-type[type='radio']:checked").val();
        //use userData.uid to create user object in Firebase
        newUser = {
        	"uid": userData.uid,
        	"username": userData.email,
        	"monster-type": monsterType,
        	"imageURL": "",
        	"haunt-count": 0
        };
        firebaseRef.child('monster-dating').push(newUser);
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