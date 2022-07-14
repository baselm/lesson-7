# Build an API to add users to a MYSQL DB 
### Installing a MYSQL database using docker.
Install Docker Desktop using this guide (https://www.docker.com/get-started/) 
### Run MYSQL as a container in your local machine
```
docker run -p 3306:3306 --name mysql-docker-local -e MYSQL_ROOT_PASSWORD=lab-password -d mysql:latest
```
### Connect to your mysql container using the CLI command below or install MYSQLWorkbench (https://www.mysql.com/products/workbench/)
#### if you want to use the command line interface follow the following steps 
- Connect to MySQLcontainer’s interactive bash shell with the following command:
```
docker exec -it mysql-docker-local bash
```
- connect to mysql db
```
mysql -u root -p 
```
- Create a Database for our application
```
CREATE DATABASE reactdb
```
- Create a users table 
```
CREATE TABLE `reactdb`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `firstname` VARCHAR(45) NULL,
  `lastname` VARCHAR(45) NULL,
  `email` VARCHAR(45) NULL,
  `password` VARCHAR(100) NULL,
  `status` TINYINT NULL,
  `subscription` TINYINT NULL,
  PRIMARY KEY (`id`));

```
- Create Customers table
```
CREATE TABLE `cutomers` (
  `user_id` int DEFAULT NULL,
  `id` int NOT NULL AUTO_INCREMENT,
  `fullname` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`)
) 
```
### Create a new folder in your application root directory called server
### create a new file called server.js 
In this file we will use a node packages to connect to our mysql database and to insert users and verify users in the DB.
### install the following packages inside your react app terminal:
npm install express cors mysql2 
### Create a db connection in server.js to test that we can connect

```
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
```
### run the server.js to test the connection 
```
node server/server.js
```