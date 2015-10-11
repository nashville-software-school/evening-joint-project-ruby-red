define(["jquery"], function($) {

	return {
		like: function(userKey) {
			$.ajax("https://monster-dating.firebaseio.com/users.json").done(function(users) {
      	console.log("hauntCount", users[userKey].hauntCount);
      	users[userKey].hauntCount++;
      });
		}
	};
});