//////////THIS DOES NOT WORK AND IT DRIVING MY NUTS\\\\\\\\\\\\\\
 
//var pathToImages =
//   ['bag.jpg', 'banana.jpg', 'bathroom.jpg', 'boots.jpg', 'breakfast.jpg',
//     'bubblegum.jpg', 'chair.jpg', 'cthulhu.jpg', 'dog-duck.jpg', 'dragon.jpg',
//     'pen.jpg', 'pet-sweep.jpg', 'scissors.jpg', 'shark.jpg', 'sweep.png',
//     'tautaun.jpg', 'unicorn.jpg', 'usb.gif', 'water-can.jpg', 'wine-glass.jpg' ];
// var items = [];
// var indexUno = 0;
// var indexDos = 1;
// var indexTres = 2;

// var elPhotoArea = document.getElementById('imageArea');

// var imageUno = document.getElementById('image1');
// var imageDos = document.getElementById('image2');
// var imageTres = document.getElementById('image3');

// var theChart = document.getElementById('chart');

// function clickHandler(event) {
//   var clickedImagePath = event.target.src.split('assets/')[1];
//   var clickedImageIndex = pathToImages.indexOf(clickedImagePath);
//   items[clickedImageIndex].clicked += 1;

//   changePicture();
//   renderChart();

// }

// function changePicture(){
//   var randomIndex1 = generateRandomNumber();
//   var randomIndex2 = generateRandomNumber();
//   var randomIndex3 = generateRandomNumber();

//   while (randomIndex1 === indexUno) {
//     randomIndex1 = generateRandomNumber();
//   }
//   while (randomIndex2 === indexDos || randomIndex2 || randomIndex1){
//     randomIndex2 = generateRandomNumber();
//   }
//   while (randomIndex3 === indexTres || randomIndex3 === randomIndex2 || randomIndex3 === randomIndex1){
//     randomIndex3 = generateRandomNumber();
//   }
//   imageUno.src = items[randomIndex1].filepath;
//   imageDos.src = items[randomIndex2].filepath;
//   imageTres.src = items[randomIndex3].filepath;

//   items[randomIndex1].shown += 1;
//   items[randomIndex2].shown += 1;
//   items[randomIndex3].shown += 1;

//   indexUno = randomIndex1;
//   indexDos = randomIndex2;
//   indexTres = randomIndex3;
// }
// function generateRandomNumber() {
//   return Math.floor(Math.random() * pathToImages.length);
// }
// function init(){
//   for (var i = 0; i < pathToImages.length; i ++) {
//     items.push(new Item(pathToImages[i]));
//   }
//   imageUno.src = items[indexUno].filepath;
//   imageDos.src = items[indexDos].filepath;
//   imageTres.src = items[indexTres].filepath;

//   items[indexUno].shown += 1;
//   items[indexDos].shown += 1;
//   items[indexTres].shown += 1;
// }

// function Item(path) {
//   this.names = path.split('.')[0];
//   this.filepath = 'assets/' + path;
//   this.shown = 0;
//   this.clicked = 0;
// }

// function renderChart() {
//   var names = [];
//   var clicks = [];
//   for (var i = 0; i < items.length; i++){
//     names.push(items[i].name);
//     clicks.push(items[i].clicked);
//   }


//   var chartData = {

//     type: 'bar',
//     data: {
//       labels: names,
//       datasets: [
//         {
//           label: '# of Votes',
//           data: clicks,
//           backgroundColor: [
//             'rgba(207, 54, 16, 0.2)',
//             'rgba(106, 6, 6, 0.2)',
//             'rgba(187, 82, 82, 0.2)',
//             'rgba(69, 226, 223, 0.2)',
//             'rgba(16, 75, 202, 0.2)',
//             'rgba(65, 72, 143, 0.2)',
//             'rgba(234, 238, 47, 0.2)',
//             'rgba(237, 229, 124, 0.2)',
//             'rgba(206, 175, 22, 0.2)',
//             'rgba(32, 206, 22, 0.2)',
//             'rgba(8, 119, 3, 0.2)',
//             'rgba(75, 199, 96, 0.2)',
//             'rgba(137, 75, 199, 0.2)',
//             'rgba(79, 10, 147, 0.2)',
//             'rgba(183, 113, 253, 0.2)',
//             'rgba(201, 111, 7, 0.2)',
//             'rgba(231, 171, 58, 0.2)',
//             'rgba(255, 216, 132, 0.2)',
//             'rgba(249, 107, 197, 0.2)',
//             'rgba(175, 2, 112, 0.2)',
//             'rgba(252, 94, 194, 0.2)'
//           ],
//           borderColor: [
//             'rgba(207, 54, 16, 1)',
//             'rgba(106, 6, 6, 1)',
//             'rgba(187, 82, 82, 1)',
//             'rgba(69, 226, 223, 1)',
//             'rgba(16, 75, 202, 1)',
//             'rgba(65, 72, 143, 1)',
//             'rgba(234, 238, 47, 1)',
//             'rgba(237, 229, 124, 1)',
//             'rgba(206, 175, 22, 1)',
//             'rgba(32, 206, 22, 1)',
//             'rgba(8, 119, 3, 1)',
//             'rgba(75, 199, 96, 1)',
//             'rgba(137, 75, 199, 1)',
//             'rgba(79, 10, 147, 1)',
//             'rgba(183, 113, 253, 1)',
//             'rgba(201, 111, 7, 1)',
//             'rgba(231, 171, 58, 1)',
//             'rgba(255, 216, 132, 1)',
//             'rgba(249, 107, 197, 1)',
//             'rgba(175, 2, 112, 1)',
//             'rgba(252, 94, 194, 1)'
//           ],
//           borderWidth: 1
//         }
//       ]
//     },
//     options: {
//       scales: {
//         yAxes: [
//           {
//             ticks: {
//               beginAtZero: true
//             }
//           }
//         ]
//       }
//     }
//   };
//   new Chart(theChart, chartData);
// }

// init();
// elPhotoArea.addEventListener('click', clickHandler);




//THIS IS THE WORKING CODE, PLACING HERE FOR NOW//
////////////////////working...\\\\\\\\\\\\\\\\\\\\

// var paths = ['bag.jpg', 'banana.jpg', 'bathroom.jpg', 'boots.jpg', 'breakfast.jpg', 'bubblegum.jpg',
//   'chair.jpg', 'cthulhu.jpg', 'dog-duck.jpg', 'dragon.jpg', 'pen.jpg', 'pet-sweep.jpg', 'scissors.jpg',
//   'shark.jpg', 'sweep.png', 'tauntaun.jpg', 'unicorn.jpg', 'usb.gif', 'water-can.jpg','wine-glass.jpg'];
// var items = [];
// var displayIndex1 = 0;
// var displayIndex2 = 1;
// var displayIndex3 = 2;

// var elImageArea = document.getElementById('imageArea');

// var elImage1 = document.getElementById('image1');
// var elImage2 = document.getElementById('image2');
// var elImage3 = document.getElementById('image3');

// var elChart = document.getElementById('chart');


// function clickHandler(event) {
//   var clickedImagePath = event.target.src.split('assets/')[1];
//   var clickedImageIndex = paths.indexOf(clickedImagePath);
//   items[clickedImageIndex].clicked += 1;

//   changePicture();
//   renderChart();


// }

// function changePicture(){
//   var randomIndex1 = generateRandomNumber();
//   var randomIndex2 = generateRandomNumber();
//   var randomIndex3 = generateRandomNumber();

//   while (randomIndex1 === displayIndex1) {
//     randomIndex1 = generateRandomNumber();
//   }
//   while (randomIndex2 === displayIndex2 || randomIndex2 === randomIndex1) {
//     randomIndex2 = generateRandomNumber();
//   }
//   while (randomIndex3 === displayIndex3 || randomIndex3 === randomIndex2 || randomIndex3 === randomIndex1) {
//     randomIndex3 = generateRandomNumber();
//   }

//   elImage1.src = items[randomIndex1].filepath;
//   elImage2.src = items[randomIndex2].filepath;
//   elImage3.src = items[randomIndex3].filepath;

//   items[randomIndex1].shown += 1;
//   items[randomIndex2].shown += 1;
//   items[randomIndex3].shown += 1;


//   displayIndex1 = randomIndex1;
//   displayIndex2 = randomIndex2;
//   displayIndex3 = randomIndex3;
// }

// function generateRandomNumber() {
//   return Math.floor(Math.random() * paths.length);
// }

// function init(){
//   for (var i = 0; i < paths.length; i++) {
//     items.push(new Item(paths[i]));
//   }

// elImage1.src = items[displayIndex1].filepath;
// elImage2.src = items[displayIndex2].filepath;
// elImage3.src = items[displayIndex3].filepath;

// items[displayIndex1].shown += 1;
// items[displayIndex2].shown += 1;
// items[displayIndex3].shown += 1;

// }

// function Item(path) {
//   this.name = path.split('.')[0];
//   this.filepath = 'assets/' + path;
//   this.shown = 0;
//   this.clicked = 0;
// }



// function renderChart() {
//   var names = [];
//   var clicks = [];
//   for (var i = 0; i < items.length; i++){
//     names.push(items[i].name);
//     clicks.push(items[i].clicked);
//   }


//   var chartData = {

//     type: 'bar',
//     data: {
//     labels: names,
//      datasets: [
//        {
//          label: '# of Votes',
//          data: clicks,
//          backgroundColor: [
//            'rgba(207, 54, 16, 0.2)',
//            'rgba(106, 6, 6, 0.2)',
//            'rgba(187, 82, 82, 0.2)',
//            'rgba(69, 226, 223, 0.2)',
//            'rgba(16, 75, 202, 0.2)',
//            'rgba(65, 72, 143, 0.2)',
//            'rgba(234, 238, 47, 0.2)',
//            'rgba(237, 229, 124, 0.2)',
//            'rgba(206, 175, 22, 0.2)',
//            'rgba(32, 206, 22, 0.2)',
//            'rgba(8, 119, 3, 0.2)',
//            'rgba(75, 199, 96, 0.2)',
//            'rgba(137, 75, 199, 0.2)',
//            'rgba(79, 10, 147, 0.2)',
//            'rgba(183, 113, 253, 0.2)',
//            'rgba(201, 111, 7, 0.2)',
//            'rgba(231, 171, 58, 0.2)',
//            'rgba(255, 216, 132, 0.2)',
//            'rgba(249, 107, 197, 0.2)',
//            'rgba(175, 2, 112, 0.2)',
//            'rgba(252, 94, 194, 0.2)'
//          ],
//          borderColor: [
//            'rgba(207, 54, 16, 1)',
//            'rgba(106, 6, 6, 1)',
//            'rgba(187, 82, 82, 1)',
//            'rgba(69, 226, 223, 1)',
//            'rgba(16, 75, 202, 1)',
//            'rgba(65, 72, 143, 1)',
//            'rgba(234, 238, 47, 1)',
//            'rgba(237, 229, 124, 1)',
//            'rgba(206, 175, 22, 1)',
//            'rgba(32, 206, 22, 1)',
//            'rgba(8, 119, 3, 1)',
//            'rgba(75, 199, 96, 1)',
//            'rgba(137, 75, 199, 1)',
//            'rgba(79, 10, 147, 1)',
//            'rgba(183, 113, 253, 1)',
//            'rgba(201, 111, 7, 1)',
//            'rgba(231, 171, 58, 1)',
//            'rgba(255, 216, 132, 1)',
//            'rgba(249, 107, 197, 1)',
//            'rgba(175, 2, 112, 1)',
//            'rgba(252, 94, 194, 1)'
//          ],
//          borderWidth: 1
//        }
//      ]
//    },
//    options: {
//      scales: {
//        yAxes: [
//          {
//            ticks: {
//              beginAtZero: true
//            }
//          }
//        ]
//      }
//    }
// };
//   new Chart(elChart, chartData);
// }





// init();

// elImageArea.addEventListener('click', clickHandler);

