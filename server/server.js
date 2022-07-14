const express = require('express');
const cors = require('cors');
const app = express();
const mysql = require('mysql2');
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

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

app.post('/api/users/register', async (req, res) =>
{
console.log('/api/users/register api endpoint');
/* 
SignUp component send the following veriables to the api endpoint:
firstName,
lastName,
email,
subscription, 
password
*/
// we will get there value 
const firstName = req.body.firstName;
const lastName = req.body.lastName;
const email = req.body.email;
const subscription = req.body.subscription && 1;
const password = req.body.password;
 

console.log('Hi from registration api ', firstName, lastName, email, subscription, password);
let sql = 'INSERT INTO users SET firstname = ?, lastname = ?, email = ?, subscription = ?,  password = ?';

Connection.query(sql, [firstName, lastName, email, subscription, password],
(err, result) => {
  if (err) throw err;

  console.log(result.insertId);
});
 

res.send({
  token: 'lab-password'

});
});



app.listen(8080, () => console.log('API is running on http://localhost:8080/api/users/register'));