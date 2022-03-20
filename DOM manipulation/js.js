const body = document.querySelector('body')

const p = document.createElement('p')
p.textContent = "Hey i'm red!"
p.style.color = 'red'
body.appendChild(p)


const h3 = document.createElement('h3')
h3.textContent = "I'm blue h3!"
h3.style.color = 'blue'
body.appendChild(h3)

const div = document.createElement('div')
div.style.border = "1px solid black"
div.style.background = 'pink'
div.classList.add('div')

const h1 = document.createElement('h1')
h1.textContent = "I'm in a div"
h1.style.color = 'blue'
div.appendChild(h1)

const p2 = document.createElement('p')
p2.textContent = "ME TOO!"
div.appendChild(p2)

body.appendChild(div)