define(["jquery", "lodash", "hbs"], function($, _, hbs) {
  //homepage partial

  return {
    load: function(usersObject) {
      require(['hbs!../templates/homepage'], function(homepageHbs) {
        $("#homepage").html(homepageHbs(usersObject)
      });
      console.log("here's johnny!")
    }
  };
});
