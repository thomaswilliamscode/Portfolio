console.log('Hello, World!');

const url = window.location.href;

const leftArrow = document.getElementById('project1-left')
const rightArrow = document.getElementById('project1-right');
const screenshot = document.getElementById('project-screenshot')

const pics = {
  project1: [
    'screenshots/Project1/pal 01.png',
    'screenshots/Project1/index trailers.png',
    'screenshots/Project1/jobs main banner.png',
    'screenshots/Project1/jobs circle.png',
    'screenshots/Project1/pitch your game banner.png',
    'screenshots/Project1/pitch your game banner 2.png',
    'screenshots/Project1/about us.png',
    'screenshots/Project1/news.png',
  ],
  project2: [
    './pics/coming-soon.png',
    './pics/coming-soon.png',
    './pics/coming-soon.png',
    './pics/coming-soon.png',
    './pics/coming-soon.png',
    './pics/coming-soon.png',
    './pics/coming-soon.png',
    './pics/coming-soon.png',
  ],
};

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
    case 8:
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