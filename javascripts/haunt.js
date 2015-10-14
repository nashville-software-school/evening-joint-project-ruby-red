define(["jquery", "firebase", "dataStore"], function($, Firebase, dataStore) {

return {
  increment: function(userKey) {
		var currentUserHauntCount = new Firebase("https://monster-dating.firebaseio.com/users/" + userKey);
		$.ajax({
    	method: 'GET',
    	url: "https://monster-dating.firebaseio.com/users/" + userKey + "/hauntCount.json"
    }).done(function(hauntValue) {
	    // console.log("hauntValue", hauntValue);
	  	hauntValue++;
	  	// console.log("inc hauntValue", hauntValue);
	  	currentUserHauntCount.update({"hauntCount": hauntValue++});
	  });
/*
    $.ajax({
    	method: 'GET',
    	url: "https://monster-dating.firebaseio.com/users/" + userKey + "/hauntCount.json"
    }).done(function(hauntValue) {
      console.log("hauntValue", hauntValue);
      hauntValue++;
      console.log("inc hauntValue", hauntValue);
	    $.ajax({
	    	method: 'PATCH',
	    	url: "https://monster-dating.firebaseio.com/users/" + userKey + ".json",
	    	data: {"hauntCount": hauntValue}
	    }).done(function(hauntValue) {
	      console.log("hauntValue", hauntValue);
	    });
    });
*/
  }
};
});