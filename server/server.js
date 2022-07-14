const express = require('express');
const cors = require('cors');
const app = express();
const mysql = require('mysql2');

app.use(cors());

 // Create a connection to the database
const Connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'lab-password',
  port: '3306',
  database: 'reactdb',
  multipleStatements: true
});

// open the MySQL connection
Connection.connect(error => {
  if (error) throw error;
  console.log("Successfully connected to the database.");
});

app.use('/login', (req, res) => {
    res.send({
      token: 'lab-password'
    });
  });

app.listen(8080, () => console.log('API is running on http://localhost:8080/login'));