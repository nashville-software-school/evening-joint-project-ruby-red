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
        //use authData.uid to create user object in Firebase
        console.log(newUser);
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