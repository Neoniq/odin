function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toUpperCase();
  computerSelection = computerSelection.toUpperCase();

  if (playerSelection === 'ROCK') {
    return computerSelection === 'PAPER'
      ? 'LOSE!'
      : computerSelection === 'SCISSORS'
      ? 'WIN!'
      : computerSelection === 'ROCK'
      ? ' TIE'
      : 'WTF';
  } else if (playerSelection === 'PAPER') {
    return computerSelection === 'SCISSORS'
      ? 'LOSE!'
      : computerSelection === 'ROCK'
      ? 'WIN!'
      : computerSelection === 'PAPER'
      ? ' TIE'
      : 'WTF';
  } else if (playerSelection === 'SCISSORS') {
    return computerSelection === 'ROCK'
      ? 'LOSE!'
      : computerSelection === 'PAPER'
      ? 'WIN!'
      : computerSelection === 'SCISSORS'
      ? ' TIE'
      : 'WTF';
  } else {
    return 'WTF DUDE YOU NUTS!🤯';
  }
}

function computerPlay() {
  const die = (Math.random() * 2).toFixed();
  // console.log(die);

  if (die == 0) {
    return 'ROck';
  } else if (die == 1) {
    return 'Paper';
  } else {
    return 'Scissors';
  }
}

function printWinner(winner) {
  const body = document.querySelector('body');
  const h1 = document.createElement('h1');
  h1.textContent = winner;
  h1.style.color = 'coral';
  body.appendChild(h1);
  console.log('💻Dankholm:', computerSelection, '\n😎Player:', playerSelection);

  return winner;
}

button1 = document.querySelector('.b1')
button2 = document.querySelector('.b2')
button3 = document.querySelector('.b3')

button1.addEventListener('click', buttonSelection)
button2.addEventListener('click', buttonSelection)
button3.addEventListener('click', buttonSelection)

let playerSelection = 'paper';
playerSelection = buttonSelection()
function buttonSelection(e) {
  console.log(e.target.innerText.toUpperCase());
}
const computerSelection = computerPlay();
printWinner(playRound(playerSelection, computerSelection));
