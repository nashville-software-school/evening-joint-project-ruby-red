define(["jquery","hbs","lodash"], function($,_,hbs){

	return {
		load: function(){
			require(['hbs!../templates/loginForm'], function(loginHbs) {
	        	$("#loginRegister").html(loginHbs());
			});
			console.log("login form loaded");
		}
	};
});