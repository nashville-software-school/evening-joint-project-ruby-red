define(["jquery", "lodash", "hbs"], function($, _, hbs) {
  //homepage partial

  return {
    load: function(usersObjects) {
      require(['hbs!../templates/homepage'], function(homepageHbs) {
        $("#homepage").html(homepageHbs(usersObjects));
      });
      console.log("homepage template loaded");
    }
  };
});
