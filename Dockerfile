FROM mysql:8.0.31

COPY /schema/init.sql  /docker-entrypoint-initdb.d

ENV MYSQL_DATABASE=inventory
ENV MYSQL_USER=user
ENV MYSQL_PASSWORD=password
ENV MYSQL_ROOT_PASSWORD=P@ssw0rd

EXPOSE 3306




