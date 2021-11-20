# Creación de contenedor con MySQL

```
docker volume create vol-mysql
docker run -d --name server-mysql -p 3306:3306 -v vol-mysql:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=test -e MYSQL_USER=test -e MYSQL_PASSWORD=test -e MYSQL_DATABASE=test mysql:8.0
```

```
docker ps
docker ps -a
```