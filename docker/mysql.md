# Creación de un contenedor con MySQL

```
docker run -d --name server-curso -e MYSQL_ROOT_PASSWORD=test -e MYSQL_DATABASE=test -e MYSQL_USER=test -e MYSQL_PASSWORD=test -p 3307:3306 -v mysql-curso:/var/lib/mysql mysql:8.0
```
