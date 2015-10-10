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
  ["jquery", "hbs", "bootstrap", "get-users", "firebase"],
  function($, Handlebars, bootstrap, getUsers, Firebase) {

    var usersObject = new Firebase("https://monster-dating.firebaseio.com/");
    usersObject.child('users').on('value', function(snapshot){
      console.log(snapshot);
    })
  }
);
