const btn = document.querySelector('#btn')
btn.onclick = () => alert('Hello')

// Not arrow function:
// btn.onclick = function name(params) {
//     alert('hello')
// }

const btn3 = document.querySelector('#btn3')
btn3.addEventListener('click', () => alert('Hi'))

btn3.addEventListener('click', (e) => {
    console.log(e.target)
    e.target.style.background = 'blue'
})