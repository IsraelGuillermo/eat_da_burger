DROP DATABASE IF EXIST burgers_db;
CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
    id INT AUTO_INCREMENT PRIMARY KEY
    , burger_name VARVHAR(55)
    , devoured BOOLEAN
);