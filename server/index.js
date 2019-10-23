// Import the express framework for our node server
const express = require('express');
// Import the path module from node to create absolute file paths for express static
const path = require('path');

const bodyParser = require('body-parser')

// Instantiate the express server
const app = express();
// Set a constant for the port that our express server will listen on
const PORT = 3000;

const db = require('../db/index.js');

const axios = require('axios');

// Serve static files. Any requests for specific files will be served if they exist in the provided folder
app.use(express.static(path.join(__dirname, '../client/dist')));

app.use(bodyParser.json());

// Start the server on the provided port
app.listen(PORT, () => console.log('Listening on port: ' + PORT));


// app.post('/signUp', async (req, res) => {
//   const { userName, discord } = req.body
//   try {
//     const { data } = await axios.get(`https://jstris.jezevec10.com/api/u/${userName}/records/1?mode=1`)
//     const { success } = db.addUser(req.body)
//     res.status(200).send(data)
//   }
//   catch (err) {
//     res.status(400).send('This user does not exist on JTetris')
//   }
// })

app.post('/signUp', (req, res) => {
  const { userName } = req.body
  axios.get(`https://jstris.jezevec10.com/api/u/${userName}/records/1?mode=1`)
    .then(({ data }) => {
      console.log('successful call to api', data)
      db.addUser(req.body, res)
      res.status(200).send(data)
    })
    .catch(err => {
      res.status(400).send('GG no username exists in API try again')
    })
})