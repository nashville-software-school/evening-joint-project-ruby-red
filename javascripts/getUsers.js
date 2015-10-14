define(["jquery"], function($) {

var currentLoggedInUser = "";

  return {
    loadAllUsers: function(callback) {
      $.ajax("https://monster-dating.firebaseio.com/users.json")
      .done(function(allUsers) {
      	// console.log("all users", allUsers);
      	callback(allUsers);
      });
    },
    loadCurrentUser: function(callback) {
      console.log("currentLoggedInUser", currentLoggedInUser);
      $.ajax("https://monster-dating.firebaseio.com/users/" + currentLoggedInUser + ".json")
      .done(function(currentUser) {
        console.log("current user", currentUser);
        callback(currentUser);
      }).fail(function() {
        console.log("ajax failed");
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