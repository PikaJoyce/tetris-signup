const mysql = require('mysql');
const mysqlConfig = require('./connection')

// Please add the config details of your computer
// module.exports = {
//   host: 'HOSTNAME',
//   user: 'USER',
//   password: 'COMPUTERPASSWORD',
//   database: 'accounts'
// };

const connection = mysql.createConnection(mysqlConfig);

const addUser = (req) => {
  connection.connect();
  const { userName, discord } = req
  connection.query(`INSERT INTO accounts (name, discord) VALUES ("${userName}", "${discord}")`, (err, data) => {
    if (err) {
      console.log('Couldnt add to db', err)
      return err
    };
    console.log('Successfully added to db')
  })
  connection.end();
}

module.exports = { addUser }