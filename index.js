// Import necessary modules
const express = require('express');
const { calculateWinner } = require('./utility'); // Import calculateWinner function from utility module
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');

// Create an instance of the Express application
const app = express();
const port = 3000;
const textBodyParser = bodyParser.text({ limit: '20mb', defaultCharset: 'utf-8' });

// Import our custom modules here:
const { calculateReward, calculateWinner } = require('./utility'); // Import calculateReward and calculateWinner functions

// Define the rollTheDice function to generate random dice rolls
function rollTheDice() {
  var randomNumber1 = Math.floor(Math.random() * 6) + 1;
  var randomNumber2 = Math.floor(Math.random() * 6) + 1;
  return { randomNumber1, randomNumber2 };
}

// Configure middleware
app.use(express.json()); // Parse JSON request bodies
app.use(cors({ // Enable Cross-Origin Resource Sharing
  origin: 'http://localhost:5000'
}));
app.use(bodyParser.urlencoded({ extended: false })); // Parse URL-encoded request bodies
app.use(bodyParser.json()); // Parse JSON request bodies

// Define CORS options for the /utility route
app.options('/utility', (req, res) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:5000');
  res.header('Access-Control-Allow-Headers', 'task');
  res.header('Access-Control-Allow-Methods', 'GET, POST'); // Combine methods in one header
  res.sendStatus(200);
});

// Define a GET route for '/index'
app.get('/index', async function (req, res) {
  try {
    const result = rollTheDice(); // Roll the dice
    const reward = calculateReward(result.randomNumber1, result.randomNumber2); // Calculate the reward
    res.status(200).json({ roll: result, result: reward }); // Send back dice roll and reward in JSON format
  } catch (error) {
    console.log('Error:', error);
    console.log('Request headers:', req.headers);
    res.status(500).json({ error: 'An error occurred' }); // Handle errors
  }
});

// Define a POST route for '/calculateWinner'
app.post('/calculateWinner', (req, res) => {
  const { randomNumber1, randomNumber2 } = req.body; // Extract dice roll values from the request body
  const winner = calculateWinner(randomNumber1, randomNumber2); // Calculate the winner using the imported function
  res.json({ winner }); // Send back the winner in JSON format
});

// Start the server and listen on the specified port
app.listen(port, (err) => {
  if (err) {
    console.log("There was a problem: ", err);
    return;
  }
  console.log(`Server listening on http://localhost:${port}`);
});
