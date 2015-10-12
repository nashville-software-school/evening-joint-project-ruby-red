define(["jquery", "firebase"], function($, Firebase) {


return {
      like: function(userKey) {
            var firebaseUser = new Firebase("https://monster-dating.firebaseio.com/users/" + userKey);
            $.ajax("https://monster-dating.firebaseio.com/users/" + userKey + "/hauntCount.json").done(function(hauntValue) {
                  firebaseUser.update({"hauntCount": hauntValue+1});
            });
      }
};
});