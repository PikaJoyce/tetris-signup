// Import the express framework for our node server
const express = require('express');
// Import the path module from node to create absolute file paths for express static
const path = require('path');

const bodyParser = require('body-parser')

// Instantiate the express server
const app = express();
// Set a constant for the port that our express server will listen on
const PORT = 3000;

// Serve static files. Any requests for specific files will be served if they exist in the provided folder
app.use(express.static(path.join(__dirname, '../client/dist')));

app.use(bodyParser.json());

// Start the server on the provided port
app.listen(PORT, () => console.log('Listening on port: ' + PORT));


app.post('/signUp', (req, res) => {
  const { body } = req
  console.log('the bod', body)
})
