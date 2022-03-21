// SELECTORS
const grid = document.querySelector('.grid');

// CREATED ELEMENTS
const square = document.createElement('div');
square.classList.add('square');
square.textContent = 'This is the glorious text-content!';

function buildGrid(size) {
  for (i = 0; i < size; i++) {
    grid.appendChild(square);
    grid.appendChild(square);
    console.log(i);
  }
}

buildGrid(16);
