# Creación de servidor SonarQube

```
docker network create net-sonarqube --drive bridge
docker run -d --name sonarqube -p 9000:9000 -p 9092:9092 --network net-sonarqube sonarqube
```

## Acceder al contenedor

- http://localhost:9000
- usuario: admin
- password: admin

## Ejecutar el sonar-scanner usando sonar-project.properties

- sonar-scanner

## Ejecutar el sonar-scanner with paramters

- sonar-scanner.bat -D"sonar.projectKey=pruebas2" -D"sonar.sources=." -D"sonar.host.url=http://localhost:9000" -D"sonar.login=cf9edb88ee0691dc0919e28e76477005f901144c"

## Ejecutar el sonar-scanner usando Docker

```
docker run --rm -e SONAR_HOST_URL="http://sonarqube:9000" -e SONAR_LOGIN="cf9edb88ee0691dc0919e28e76477005f901144c" -v ${PWD}/src:/usr/src --network net-sonarqube sonarsource/sonar-scanner-cli -D"sonar.projectKey=cursonodejs"
```
