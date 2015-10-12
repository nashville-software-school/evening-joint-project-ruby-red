define(["jquery", "firebase"], function($, Firebase) {

	return {
		like: function(userKey) {
			$.ajax("https://monster-dating.firebaseio.com/users.json").done(function(users) {
      	console.log("hauntCount", users[userKey]);
      	var newHauntCount = users[userKey].hauntCount++;
      	console.log("hauntCount", users[userKey].hauntCount);
      	console.log("users", users);
      	//need to push modified hauntCount to Firebase
      $.ajax({
      	type: 'POST',
      	url: "https://monster-dating.firebaseio.com/",
      	data: users
      }).done(function(){
      	console.log("hauntCount updated to firebase");
      });
      });
		}
	};
});