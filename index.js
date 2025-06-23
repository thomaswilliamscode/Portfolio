console.log('Hello, World!');

const url = window.location.href;

const leftArrow = document.getElementById('project1-left')
const rightArrow = document.getElementById('project1-right');
const screenshot = document.getElementById('project-screenshot')

const pics = {
  project1: [
    './screenshots/Project1/all.png',
    './screenshots/Project1/Gaming.png',
    './screenshots/Project1/Music.png' 
  ],
  project2: [
    './screenshots/Project2/gpt.png',
    './screenshots/Project2/mdn.png',
    './screenshots/Project2/vscode.png' 
  ],
  
}

let index = 0;
let projectId = '';

if ( url.includes('project1') ) {
  projectId = 'project1';

} else if ( url.includes('project2') ) {
  projectId = 'project2';
}

screenshot.src = pics[projectId][index]

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
  screenshot.src = pics[projectId][index];
  console.log(`you clicked left, Index is: ${index}`);
})

rightArrow.addEventListener('click', () => {
  index++
  picsIndex();
  screenshot.src = pics[projectId][index];
  console.log(`you clicked right, Index is: ${index}`);
});