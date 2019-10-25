const express = require('express');
const path = require('path');
const bodyParser = require('body-parser')
const app = express();
const PORT = 3000;
const db = require('../db/index.js');
const axios = require('axios');

app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(bodyParser.json());

app.listen(PORT, () => console.log('Listening on port: ' + PORT));

app.post('/signUp', (req, res) => {
  const { userName } = req.body;

  const apiAuth = async () => {
    try {
      const { data } = await axios.get(`https://jstris.jezevec10.com/api/u/${userName}/records/1?mode=1`);
      writeToDb()
    }
    catch (err) {
      throw new err
    }
  }

  const writeToDb = async () => {
    try {
      const dbAddUser = await db.addUser(req.body)
    }
    catch (err) {
      throw new err
    }
  }

  Promise.resolve(apiAuth())
    .then(() => {
      res.status(200).send('Successful')
    })
    .catch(err => {
      res.status(500).send('Error in the server')
    })
})
