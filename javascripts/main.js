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
  ["jquery", "hbs", "bootstrap", "get-users", "authenticate", "login", "register"],
  function($, Handlebars, bootstrap, getUsers, authenticate, login, register) {

  var firebaseRef = new Firebase("https://monster-dating.firebaseio.com/");

  login.load();

  //click event for loading register hbs
  $(document).on('click', "#registerButton", function() {
    //load register.hbs
    register.load();
    $("#loginRegister").hide();
  });

  //click event to register user
  $(document).on('click', "#loginButton", function() {
    authenticate.logInUser(firebaseRef);
    $("#loginRegister").hide();
    //load main.hbs
  });

  //click event to login user
  $(document).on('click', "#registerUserButton", function() {
    authenticate.createUser(firebaseRef);
    //load authenticated user as login
    $("#loginRegister").show();
    $("#loginRegister").prepend("<h3><b>You have been successfully registered. Please sign in with your new username and password.<b><h3>");
    $("#register").hide();
    //load main.hbs
  });
});