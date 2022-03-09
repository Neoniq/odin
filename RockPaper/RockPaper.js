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

const playerSelection = prompt('ROCK PAPER SCISSORS', 'rock');
const computerSelection = computerPlay();
console.log('Dankholm:', computerSelection, '|', 'Player:', playerSelection);
console.warn(playRound(playerSelection, computerSelection));
