define(["jquery"], function($) {

var currentLoggedInUser = "";

  return {
    loadAllUsers: function(fn) {
      $.ajax("https://monster-dating.firebaseio.com/users.json").done(function(users) {
      	// console.log("user JSON", users);
      	fn(users);
      });
    },
    setCurrentLoggedInUser: function(uid) {
    	// console.log("currentLoggedInUser", uid);
    	currentLoggedInUser = uid;
    },
    getCurrentLoggedInUser: function() {
    	return currentLoggedInUser;
    }
  };
});