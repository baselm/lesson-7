# Build an API to add users to a MYSQL DB 
### Installing a MYSQL database using docker.
Install Docker Desktop using this guide (https://www.docker.com/get-started/) 
### Run MYSQL as a container in your local machine
```
docker run -p 3306:3306 --name mysql-docker-local -e MYSQL_ROOT_PASSWORD=lab-password -d mysql:latest
```
