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
    'bootstrap': ['jquery'],
    'firebase': {
      'exports': 'Firebase'
    }
  }
});

requirejs(
  ["jquery", "hbs", "bootstrap", "firebase", "getUsers", "authenticate", "domControl", "haunt"],
  function($, Handlebars, bootstrap, Firebase, getUsers, authenticate, domControl, haunt) {

  var firebaseRef = new Firebase("https://monster-dating.firebaseio.com/");

/*
I'm circumventing the login and register functionality during development
*/
  authenticate.logInUser(firebaseRef, "mncross@gmail.com", "abc");
  $("#loginRegister").show();

/*                                            */

  // domControl.loadLoginForm();

  //click event for loading register hbs
  $(document).on('click', "#registerButton", function() {
    //load register.hbs
    domControl.loadRegistrationForm();
    $('#register').show();
    $("#loginRegister").hide();
  });

  //click event to register user
  $(document).on('click', "#loginButton", function() {
    authenticate.logInUser(firebaseRef);
    console.log("currentLoggedInUser", currentLoggedInUser);
  });

  //click event to login user
  $(document).on('click', "#registerUserButton", function() {
    authenticate.createUser(firebaseRef);
  });

  //click event to logout
  $(document).on('click', '#logoutButton', function() {
    $('#homepage').remove();
    $("#loginRegister").show();
  });

  //click event to haunt
  $(document).on('click', ".hauntButton", function() {
    $(this).attr("src", "../images/haunted.png");
    var hauntedUid = $(this).attr("uid");
    // console.log("hauntedUid", hauntedUid);
    haunt.increment(hauntedUid);
  });

  //click event to show my profile
  $(document).on('click', '#myProfileButton', function() {
    $('#homepage').hide();
    getUsers.loadCurrentUser(domControl.loadMyProfile);
  })
});