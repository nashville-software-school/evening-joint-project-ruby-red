define(["jquery", "firebase"], function($, Firebase) {



return {
  like: function(userKey) {
    $.ajax({
    	method: 'GET',
    	url: "https://monster-dating.firebaseio.com/users/" + userKey + "/hauntCount.json"
    }).done(function(hauntValue) {
      console.log("hauntValue", hauntValue);
      hauntValue++;
	    $.ajax({
	    	method: 'PATCH',
	    	url: "https://monster-dating.firebaseio.com/users/" + userKey + ".json",
	    	data: {"hauntCount": hauntValue}
	    }).done(function(hauntValue) {
	      console.log("hauntValue", hauntValue);
	    });
    });
  }
};
});