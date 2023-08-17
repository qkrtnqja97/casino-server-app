// utility.js

// Function to calculate rewards
function calculateReward(randomNumber1, randomNumber2) {
  if (randomNumber1 === randomNumber2) {
    return "It's a Draw!";
  } else if (randomNumber1 < randomNumber2) {
    return "Player 2 WINS!";
  } else {
    return "Player 1 WINS!";
  }
}

// Function to calculate the winner
function calculateWinner(randomNumber1, randomNumber2) {
  if (randomNumber1 === randomNumber2) {
    return "draw";
  } else if (randomNumber1 < randomNumber2) {
    return "player2";
  } else {
    return "player1";
  }
}

module.exports = {
  calculateReward,
  calculateWinner
};



//buraya rewardsları filan koymak lazım. ve return ettirmen lazım. 

//bunları module.exportların içine koymak lazım. 