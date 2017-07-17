console.log('JS sourced');

//create angular app
var myApp = angular.module('myApp', []);

//link app to controller
myApp.controller('GalleryController', function() {

  //scoping gallery to this controller
  var gallery = this;
  gallery.imageArray = [
    //store relative image paths
    {image: "images/alAndGary.jpg", description: "My sister, Alex, and her husband, Gary, in London", likes: 0, display: true, views: 0},
    {image: "images/anderAndLucy.jpg", description: "My brother, Ander, with his newborn daughter, Lucy", likes: 0, display: true, views: 0},
    {image: "images/premie.jpg", description: "Me at Children's Hospital at 4 weeks old being held by my mom", likes: 0, display: true, views: 0},
    {image: "images/turtle.jpg", description: "My pup, Turtle, being a lazy bones", likes: 0, display: true, views: 0},
    {image: "images/dinoCar.jpg", description: "Funny Dinos trying to go on a weekend adventure", likes: 0, display: true, views: 0},
    {image: "images/momAndAnder.jpg", description: "My mom and brother fishing on the St. Croix River", likes: 0, display: true, views: 0}
  ];

  //increase likes count by 1 on click of button
  gallery.likesCounter = function(galleryObj) {
    galleryObj.likes += 1;
  };//end likesCounter

  //toggle display of image and description on click of div
  gallery.toggleDisplay = function(galleryObj) {
    galleryObj.display = !galleryObj.display;
  };//end toogleDisplay

  //increase views count by 1 on click of image
  gallery.viewsCounter = function(galleryObj) {
    galleryObj.views += 1;
  };//end viewsCounter

});//end gallery controller

//box shadows, comments - button, input field, display of comment
//deploy to heroku!
