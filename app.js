'use strict';
////////////////////working...\\\\\\\\\\\\\\\\\\\\
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

function clickHandler(event) {
  changePicture();
  displayChart();
}

function generateRandomNumber() {
  return Math.floor(Math.random() * pathToImages.length);
}

function changePicture(){
  var randomIndex1 = generateRandomNumber();
  var randomIndex2 = generateRandomNumber();
  var randomIndex3 = generateRandomNumber();

  while (randomIndex1 === indexOne) {
    randomIndex1 = generateRandomNumber();
  }
  while (randomIndex2 === indexTwo || randomIndex2 === randomIndex1) {
    randomIndex2 = generateRandomNumber();
  }
  while (randomIndex3 === indexThree || randomIndex3 === randomIndex2 || randomIndex3 === randomIndex1) {
    randomIndex3 = generateRandomNumber();
  }

  imageUno.src = items[randomIndex1].filepath;
  imageDos.src = items[randomIndex2].filepath;
  imageTres.src = items[randomIndex3].filepath;

  items[randomIndex1].shown += 1;
  items[randomIndex2].shown += 1;
  items[randomIndex3].shown += 1;

  indexOne = randomIndex1;
  indexTwo = randomIndex2;
  indexThree = randomIndex3;
}


function fluxCapacitor(){
  for (var i = 0; i < pathToImages.length; i++) {
    items.push(new Item(pathToImages[i]));
  }

  imageUno.src = items[indexOne].filepath;
  imageDos.src = items[indexTwo].filepath;
  imageTres.src = items[indexThree].filepath;

  items[indexOne].shown += 1;
  items[indexTwo].shown += 1;
  items[indexThree].shown += 1;
}

function Item(path) {
  this.name = path.split('.')[0];
  this.filepath = 'assets/' + path;
  this.shown = 0;
  this.clicked = 0;
}

fluxCapacitor();
imageZone.addEventListener('click', clickHandler);

