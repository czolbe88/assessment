#!/bin/bash
name='mysql'
docker rm -f "$name"
docker run -p 3306:3306 --name "$name" -e MYSQL_DATABASE=inventory \
-e MYSQL_USER=user -e MYSQL_PASSWORD=password -e MYSQL_ROOT_PASSWORD=P@ssw0rd -v schema:/docker-entrypoint-initdb.d  mysql:8.0.31