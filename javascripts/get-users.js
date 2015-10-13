define(["jquery","lodash", "homepage"], function($, _, homepage) {

var currentLoggedInUser = "";

  return {
    load: function(fn) {
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