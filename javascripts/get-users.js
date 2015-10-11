define(["jquery","lodash", "homepage"], function($, _, homepage) {

  return {
    load: function(fn) {
      $.ajax("https://monster-dating.firebaseio.com/users.json").done(function(users) {
      	console.log("user JSON", users);
      	fn(users);
      });
    }
  };
});