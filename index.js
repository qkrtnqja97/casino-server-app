const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const port = 3000;
const textBodyParser = bodyParser.text({ limit: '20mb', defaultCharset: 'utf-8' });

// Import our custom modules here:
const { calculateReward, calculateWinner } = require('./utility.js');

app.use(cors({
  origin: 'http://localhost:5000'
}));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.options('/utility', (req, res) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:5000');
  res.header('Access-Control-Allow-Headers', 'task');
  res.header('Access-Control-Allow-Methods', 'GET');
  res.header('Access-Control-Allow-Methods', 'POST');
  res.sendStatus(200);
});

app.get('/index', async function (req, res) {
  try {
    const result = rollTheDice();
    const winner = calculateWinner(result.randomNumber1, result.randomNumber2);
    res.status(200).json({ roll: result, result: winner });
  } catch (error) {
    console.log('Error:', error);
    console.log('Request headers:', req.headers);
    res.status(500).json({ error: 'An error occurred' });
  }
});

app.listen(port, (err) => {
  if (err) {
    console.log("There was a problem: ", err);
    return;
  }
  console.log(`Server listening on http://localhost:${port}`);
})
