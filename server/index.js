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

app.post('/signUp', async (req, res) => {
  const { userName } = req.body
  try {
    const { data } = await axios.get(`https://jstris.jezevec10.com/api/u/${userName}/records/1?mode=1`)
    db.addUser(req.body)
    res.status(200).send(data)
  }
  catch (err) {
    res.status(400).send('This user does not exist on JTetris')
  }
})
