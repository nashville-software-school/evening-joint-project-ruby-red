define(["jquery","lodash", "hbs"], function($, _, hbs) {

  // hbs.registerPartial('registerForm', '{{registerForm}}')

  return {
    load: function(fn) {
      require(['hbs!../templates/register'], function(registerHbs) {
        $("#register").html(registerHbs())
      });
      console.log("it ran dat")
    }
  };
});