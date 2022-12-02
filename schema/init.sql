create database if not exists inventory;
use inventory;

CREATE TABLE items
(
id INTEGER AUTO_INCREMENT,
name VARCHAR(255) NOT NULL UNIQUE,
category VARCHAR(255) NOT NULL,
price DECIMAL(10,2) NOT NULL,
last_updated_dt DATETIME NOT NULL,
PRIMARY KEY (id)
);

INSERT INTO items
(name, category, price, last_updated_dt)
VALUES
("pencil", "stationery", "1.20", "2022-01-01 10:00:00" ),
("pen", "stationery", "2.20", "2022-01-01 10:00:00" ),
("apple pencil", "device", "100.20", "2022-01-01 10:00:00" );