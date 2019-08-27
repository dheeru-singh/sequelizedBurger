DROP DATABASE IF EXISTS `sequelize_burger`;
CREATE DATABASE `sequelize_burger`;

DROP DATABASE IF EXISTS burgers_db;

-- Create the database burgers_db and specified it for use.
CREATE DATABASE burgers_db;

USE burgers_db;

-- Create the table burgers.
CREATE TABLE burgers (
  id int NOT NULL AUTO_INCREMENT,
  burger_name varchar(255) NOT NULL,
  devoured boolean default false,
  PRIMARY KEY (id)
);