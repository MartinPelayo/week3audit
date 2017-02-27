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
var totalVotes = 0;
var theChart = document.getElementById('chart');

function clickHandler(event) {
  if (totalVotes !== 25){
    var clickedImagePath = event.target.src.split('assets/')[1];
    var clickedImageIndex = pathToImages.indexOf(clickedImagePath);
    items[clickedImageIndex].clicked += 1;
    totalVotes += 1;

    changePicture();
    saveData();
  }
  if (totalVotes === 25){
    displayChart();
  }
}

function changePicture(){
  var randomIndex1 = generateRandomNumber();
  var randomIndex2 = generateRandomNumber();
  var randomIndex3 = generateRandomNumber();

  while (randomIndex1 === indexOne || randomIndex1 === randomIndex2 || randomIndex1 === randomIndex3) {
    randomIndex1 = generateRandomNumber();
  }
  while (randomIndex2 === indexTwo || randomIndex2 === randomIndex1 || randomIndex2 === randomIndex3) {
    randomIndex2 = generateRandomNumber();
  }
  while (randomIndex3 === indexThree || randomIndex3 === randomIndex2 || randomIndex3 === randomIndex1) {
    randomIndex3 = generateRandomNumber();
  }

  imageUno.src = items[randomIndex1].filepath;//src is sort of a reference to an HTML element, here, specifies imageUno
  imageDos.src = items[randomIndex2].filepath;
  imageTres.src = items[randomIndex3].filepath;

  items[randomIndex1].shown += 1;
  items[randomIndex2].shown += 1;
  items[randomIndex3].shown += 1;

  indexOne = randomIndex1;
  indexTwo = randomIndex2;
  indexThree = randomIndex3;
}

function generateRandomNumber() {
  return Math.floor(Math.random() * pathToImages.length);
}

function init() {
  var dataItems = localStorage.getItem('items');
  if(dataItems) {
    items = JSON.parse(dataItems);
    indexOne = parseInt(localStorage.getItem('indexOne') );
    indexTwo = parseInt(localStorage.getItem('indexTwo') );
    indexThree = parseInt(localStorage.getItem('indexThree') );
    totalVotes = parseInt(localStorage.getItem('totalVotes') );

    if (totalVotes === 25){
      totalVotes = 0;
    }
  }else{
    for(var i = 0; i < pathToImages.length; i++){
      items.push(new Item(pathToImages[i]) );
    }
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

function displayChart() {
  var names = [];
  var clicks = [];
  for (var i = 0; i < items.length; i++){
    names.push(items[i].name);
    clicks.push(items[i].clicked);
  }

  var chartData = {
    type: 'bar',
    data: {
      labels: names,
      datasets: [
        {
          label: '# of Votes',
          data: clicks,
          backgroundColor: [
            'rgba(207, 54, 16, 0.2)',
            'rgba(106, 6, 6, 0.2)',
            'rgba(187, 82, 82, 0.2)',
            'rgba(69, 226, 223, 0.2)',
            'rgba(16, 75, 202, 0.2)',
            'rgba(65, 72, 143, 0.2)',
            'rgba(234, 238, 47, 0.2)',
            'rgba(237, 229, 124, 0.2)',
            'rgba(206, 175, 22, 0.2)',
            'rgba(32, 206, 22, 0.2)',
            'rgba(8, 119, 3, 0.2)',
            'rgba(75, 199, 96, 0.2)',
            'rgba(137, 75, 199, 0.2)',
            'rgba(79, 10, 147, 0.2)',
            'rgba(183, 113, 253, 0.2)',
            'rgba(201, 111, 7, 0.2)',
            'rgba(231, 171, 58, 0.2)',
            'rgba(255, 216, 132, 0.2)',
            'rgba(249, 107, 197, 0.2)',
            'rgba(175, 2, 112, 0.2)',
            'rgba(252, 94, 194, 0.2)'
          ],
          borderColor: [
            'rgba(207, 54, 16, 1)',
            'rgba(106, 6, 6, 1)',
            'rgba(187, 82, 82, 1)',
            'rgba(69, 226, 223, 1)',
            'rgba(16, 75, 202, 1)',
            'rgba(65, 72, 143, 1)',
            'rgba(234, 238, 47, 1)',
            'rgba(237, 229, 124, 1)',
            'rgba(206, 175, 22, 1)',
            'rgba(32, 206, 22, 1)',
            'rgba(8, 119, 3, 1)',
            'rgba(75, 199, 96, 1)',
            'rgba(137, 75, 199, 1)',
            'rgba(79, 10, 147, 1)',
            'rgba(183, 113, 253, 1)',
            'rgba(201, 111, 7, 1)',
            'rgba(231, 171, 58, 1)',
            'rgba(255, 216, 132, 1)',
            'rgba(249, 107, 197, 1)',
            'rgba(175, 2, 112, 1)',
            'rgba(252, 94, 194, 1)'
          ],
          borderWidth: 1
        }
      ]
    },
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true
            }
          }
        ]
      }
    }
  };
  new Chart(theChart, chartData);

};

function saveData() {
  localStorage.setItem('items',JSON.stringify(items) );
  localStorage.setItem('indexOne', indexOne);
  localStorage.setItem('indexTwo', indexTwo);
  localStorage.setItem('indexThree', indexThree);
  localStorage.setItem('totalVotes', totalVotes);
}
init();
imageZone.addEventListener('click', clickHandler);