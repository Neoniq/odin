// SELECTORS
const grid = document.querySelector('.grid')
const colorVar = '--grid-size'
const gridSlider = document.getElementById('slider')
const greenBtn = document.querySelector('button')

function setupGrid(size) {
  grid.replaceChildren()
  grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
  grid.style.gridTemplateRows = `repeat(${size}, 1fr)`
  console.log('Grid: ', size + ' => ' + size * size)

  for (let i = 0; i < size * size; i++) {
    const gridElement = document.createElement('div')
    gridElement.classList.add('grid-element')
    gridElement.addEventListener('mouseover', changeColor)
    // gridElement.addEventListener('mousedown', changeColor)
    grid.appendChild(gridElement)
    // console.log(i);
  }
}

setupGrid(16)

function changeColor(el) {
  el.target.style.backgroundColor = `rgb(${rgbGen()}, ${rgbGen()}, ${rgbGen()})`
}

function rgbGen() {
  return (Math.random() * 256).toFixed()
}

gridSlider.addEventListener('change', (e) => {
  // console.log(e, 'asd')
  const size = e.target.valueAsNumber
  setupGrid(size)
})
