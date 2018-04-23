// set up the key input stuff
const readline = require('readline');
readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);

/**
 * called when the bomb explodes. Output the scores and quit the program.
 */
function boom() {
  console.log(`BOOOM. You lost, player number ${currentPlayer}!!!`);

  // set score of current player to 0, then output score
  scores[currentPlayer] = 0;

  scores.forEach((score, index) => {
    console.log(`Player ${index}: ${score} points`);
  });
  process.exit();
}

/**
 * called every second. Increase the current player's score, check if
 * the player bomb explodes. Otherwise, increase the ticksPerRound counter.
 */
function tick() {
  const userChance = ticksPerRound <= userChances.length - 1 ?
                      userChances[ticksPerRound] :
                      userChances[userChances.length-1];

  const chance = Math.floor(Math.random() * userChance);
  // console.log(`${chance} out of ${userChance}`);

  if (chance === 0) {
    boom();
  }
  ticksPerRound += 1;
  scores[currentPlayer] += 1;
  console.log('tick');
}

function passTheBomb(){
  currentPlayer = (currentPlayer + 1) % numPlayers;
  ticksPerRound = 0;
  console.log (`Player ${currentPlayer}, you're up!`);
}

function createScoreArray(n) {
  const scores = [];
  for (x = 0; x < n; x++) {
    scores.push(0);
  }
  return scores;
}

const numPlayers = 4;
const globalIntervalPerPlayer = [15, 40];
const userChances = [60, 50, 40, 30, 20, 15, 10];

const globalTimer = Math.round(
  Math.random() * (globalIntervalPerPlayer[1] - globalIntervalPerPlayer[0]) +
  globalIntervalPerPlayer[0]) * numPlayers;

console.log('gobalTimer', globalTimer);

// start with a random player, 0-based
let currentPlayer = Math.floor(Math.random() * numPlayers);

let ticksPerRound = 0;

const scores = createScoreArray(numPlayers);

// end the game when the global timer runs out
 setTimeout(boom, globalTimer*1000);

// add a point every second to the current player
setInterval(tick, 1000);

// pass the bomb when user hits space bar
process.stdin.on('keypress', function(str, key) {
  if (key.ctrl && key.name === 'c') {
    process.exit();
  } else {
    if (key.name === 'space') {
      passTheBomb();
    }
  }
});

console.log(`Player ${currentPlayer}, you start!`);
