const mysql = require('mysql');
const mysqlConfig = require('./connection')

// Please add the config details of your computer
// module.exports = {
//   host: 'HOSTNAME',
//   user: 'USER',
//   password: 'COMPUTERPASSWORD',
//   database: 'accounts'
// };

const connection = mysql.createConnection(mysqlConfig)

const addUser = async (req) => {
  const { userName, discord } = req
  const sql = `INSERT INTO accounts (name, discord) VALUES (${connection.escape(userName)}, ${connection.escape(discord)})`
  try {
    connection.connect();
    let data = await connection.query(sql)
  }
  catch (err) {
    throw new err
  }
  finally {
    connection.end();
  }
}

module.exports = { addUser }