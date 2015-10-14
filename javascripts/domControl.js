define(["jquery","hbs"], function($,hbs){

return {
	loadLoginForm: function() {
		require(['hbs!../templates/loginForm'], function(loginHbs) {
    	$("#loginRegister").html(loginHbs());
		});
	},
	loadRegistrationForm: function() {
		require(['hbs!../templates/registerForm'], function(registerHbs) {
      $("#register").html(registerHbs());
    });
	},
	loadOtherUserProfiles: function(otherUserJSON) {
		require(['hbs!../templates/homepage'], function(homepageHbs) {
      $("#homepage").html(homepageHbs({users:otherUserJSON}));
    });
	}

};
});