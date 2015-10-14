define(["jquery", "firebase"], function($, Firebase) {

var tempData;

return {
  setData: function(data) {
    console.log("data", data);
    tempData = data;
    console.log("set tempData", tempData);
  },
  getData: function() {
    console.log("get tempData", tempData);
    return tempData;
  }
};
});