define(["jquery","hbs","lodash"], function($,_,hbs){
	
	return {
		load: function(){
			console.log("loadCalled")
			require(['hbs!../templates/loginForm'], function(loginHbs) {
	        	$("#loginRegister").html(loginHbs());
			});	
		}
	}
});