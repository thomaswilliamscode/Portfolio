console.log('Hello, World!');

const leftArrow = document.getElementById('project1-left')
const rightArrow = document.getElementById('project1-right');
const screenshot = document.getElementById('project-screenshot')

const pics = [
  './screenshots/Project1/all.png',
  './screenshots/Project1/Gaming.png',
  './screenshots/Project1/Music.png'
];

let index = 0;

function picsIndex () {
  switch ( index ) {
    case -1:
      index = 2;
      break;
    case 3:
      index = 0;
      break;
  }
}

leftArrow.addEventListener( 'click', () => {
  index--;
  picsIndex()
  screenshot.src = pics[index];
  console.log(`you clicked left, Index is: ${index}`);
})

rightArrow.addEventListener('click', () => {
  index++
  picsIndex();
  screenshot.src = pics[index]
  console.log(`you clicked right, Index is: ${index}`);
});