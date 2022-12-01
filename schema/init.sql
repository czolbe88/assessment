create database if not exists inventory;
use inventory;

CREATE TABLE items
(
id INTEGER AUTO_INCREMENT,
name TEXT,
category TEXT,
price DECIMAL(10,2),
last_updated_dt DATETIME,
PRIMARY KEY (id)
)

