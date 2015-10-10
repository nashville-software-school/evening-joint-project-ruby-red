define(["jquery","lodash"], function($, _) {

  return {
    load: function(fn) {
      $.ajax("https://monster-dating.firebaseio.com").done(function(users) {
        fn(users);
      });
    }
  };
});