// BLOCK OPACITY FUNCTION
let blocks = document.getElementsByClassName('block');
let disappear = function() {
  this.style.opacity = 0;
}

Array.from(blocks).forEach( block => block.addEventListener('mouseover', disappear));

// OLD IMPLEMENTATIONS OF THE FOR LOOP
// for (i = 0; i < blocks.length; i++) {
//   blocks[i].addEventListener('mouseover', disappear, false);
// }

// Array.from(blocks).forEach(function(block) {
//   block.addEventListener('mouseover', disappear);
// });


// BACKGROUND IMAGE RANDOMIZER
const backgroundImages = [
  './resources/img/bubble-1.jpg',
  './resources/img/bubble-2.jpg',
  './resources/img/bubble-3.jpg',
  './resources/img/bubble-4.jpg',
  './resources/img/bubble-5.jpg'
]
let random = Math.floor(Math.random() * backgroundImages.length);

document.querySelector('body').style.backgroundImage = "url('" + backgroundImages[random] + "')";
