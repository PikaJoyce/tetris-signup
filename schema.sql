DROP DATABASE IF EXISTS accounts;

CREATE DATABASE accounts;

USE accounts;

DROP TABLE IF EXISTS accounts;

CREATE TABLE accounts
(
  id int
(10)
  unsigned NOT NULL AUTO_INCREMENT,
  name varchar
  (45) NOT NULL DEFAULT '',
  `discord` varchar
  (45) NOT NULL DEFAULT '',
  PRIMARY KEY
  (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;