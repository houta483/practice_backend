const mysql = require('mysql')
require('dotenv').config()

const connection = mysql.createConnection({
  host: "localhost",
  user: process.env.user,
  password: process.env.password
})

connection.connect((err) => {
  if (err) throw err;
  const createDB = 'CREATE DATABASE IF NOT EXISTS Messages'
  const selectDB = 'USE Messages'
  const createTable = 'CREATE TABLE IF NOT EXISTS Message (id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY, message VARCHAR(3000), password VARCHAR(255), created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP)'
  connection.query(createDB, (err, result) => {
    if (err) throw err;
    else {console.log('created DB')}
  })
  connection.query(selectDB, (err, result) => {
    if (err) throw err;
    else { console.log("selected DB") }
  })
  connection.query(createTable, (err, result) => {
    if (err) throw err;
    else { console.log("Made Table") }
  })
})

module.exports = connection