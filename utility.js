// Function to calculate rewards based on dice roll results
function calculateReward(randomNumber1, randomNumber2) {
  if (randomNumber1 === randomNumber2) {
    return "It's a Draw!";
  } else if (randomNumber1 < randomNumber2) {
    return "Player 2 WINS!";
  } else {
    return "Player 1 WINS!";
  }
}

// Function to calculate the winner based on dice roll results
function calculateWinner(randomNumber1, randomNumber2) {
  if (randomNumber1 === randomNumber2) {
    return "draw"; // Indicates a draw
  } else if (randomNumber1 < randomNumber2) {
    return "player2"; // Player 2 wins
  } else {
    return "player1"; // Player 1 wins
  }
}

// Export the functions to make them accessible to other modules
module.exports = {
  calculateReward,
  calculateWinner
};


