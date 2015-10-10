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

  ["jquery", "hbs", "bootstrap", "get-users", "authenticate"],
  function($, Handlebars, bootstrap, getUsers, authenticate) {

    register.load();

  var firebaseRef = new Firebase("https://monster-dating.firebaseio.com/");

  //click event to register user
  $("#login").on('click', function() {
    authenticate.logInUser(firebaseRef);
    //load main.hbs
  });

  //click event for loading register hbs
  $("#register").on('click', function() {
    //load register.hbs
  });

  //click event to login user
  $("#registerButton").on('click', function() {
    authenticate.createUser(firebaseRef);
    //load authenticated user as login
    //load main.hbs
  });
});