console.log('JS sourced');

//create angular app
var myApp = angular.module('myApp', []);

//link app to controller
myApp.controller('galleryController', function() {
  //scoping gallery to this controller
  var gallery = this;
});//end gallery controller
