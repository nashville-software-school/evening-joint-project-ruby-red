requirejs.config({
  baseUrl: './javascripts',
  paths: {
    'jquery': '../lib/bower_components/jquery/dist/jquery.min',
    'lodash': '../lib/bower_components/lodash/lodash.min',
    'hbs': '../lib/bower_components/require-handlebars-plugin/hbs',
    'bootstrap': '../lib/bower_components/bootstrap/dist/js/bootstrap.min',
    'q': '../lib/bower_components/q/q',
    'firebase': '../lib/bower_components/firebase/firebase'
  },
  shim: {
    'bootstrap': ['jquery']
  }
});

requirejs(
  ["jquery", "hbs", "bootstrap", "get-users", "register"],
  function($, Handlebars, bootstrap, getUsers, register) {

    getUsers.load(function(users) {
      require(['hbs!../templates/users'], function(userHbs) {
        $("#users").html(userHbs({ users:users }));
      });
    });

    register.load();
});