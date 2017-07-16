console.log('JS sourced');

//create angular app
var myApp = angular.module('myApp', []);

//link app to controller
myApp.controller('GalleryController', function() {
  //scoping gallery to this controller
  var gallery = this;
  gallery.imageArray = [
    //store relative image paths
    {image: "images/alAndGary.jpg", description: "My sister, Alex, and her husband, Gary, in London"},
    {image: "images/anderAndLucy.jpg", description: "My brother, Ander, with his newborn daughter, Lucy"},
    {image: "images/premie.jpg", description: "Me at Children's Hospital at 4 weeks old being held by my mom"},
    {image: "images/turtle.jpg", description: "My pup, Turtle"}
    // {image: "images/alAndGary.jpg", description: "My sister, Alex, and her husband, Gary, in London"},
    // {image: "images/alAndGary.jpg", description: "My sister, Alex, and her husband, Gary, in London"}
  ];

  //increase likes count by 1 on click of button
  gallery.likes = 0;
  gallery.likesCounter = function() {
    gallery.likes += 1;
  };//end likesCounter

 //toggle display of image and description on click of div
  gallery.display = true;
  gallery.toggleDisplay = function() {
    gallery.display = !gallery.display;
  };//end toogleDisplay

});//end gallery controller
