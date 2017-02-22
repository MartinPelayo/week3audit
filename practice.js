'use strict';
/////// ATTEMPT AT REFACTOR \\\\\\\

var pathToImages = ['bag.jpg', 'banana.jpg', 'bathroom.jpg', 'boots.jpg', 'breakfast.jpg', 'bubblegum.jpg',
  'chair.jpg', 'cthulhu.jpg', 'dog-duck.jpg', 'dragon.jpg', 'pen.jpg', 'pet-sweep.jpg', 'scissors.jpg',
  'shark.jpg', 'sweep.png', 'tauntaun.jpg', 'unicorn.jpg', 'usb.gif', 'water-can.jpg','wine-glass.jpg'];
var items = [];
var indexOne = 0;
var indexTwo = 1;
var indexThree = 2;
var imageZone = document.getElementById('imageArea');
var imageUno = document.getElementById('image1');
var imageDos = document.getElementById('image2');
var imageTres = document.getElementById('image3');
var totalVotes = 0;
var theChart = document.getElementById('chart');