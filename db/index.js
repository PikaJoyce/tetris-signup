const mysql = require('mysql');
const mysqlConfig = require('./connection')

const connection = mysql.createConnection(mysqlConfig);

connection.connect(function (err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('connected as id ' + connection.threadId);
});

module.exports.addUser = (userData) => {
  console.log('DATA IN DB', userData)
}

connection.end();