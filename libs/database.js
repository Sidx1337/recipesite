/*
* CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    password VARCHAR(512) NOT NULL,
    avatar VARCHAR(512),
    status TINYINT NOT NULL default 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)  ENGINE=INNODB;
* */
var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : ''
});

connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }

    console.log('connected as id ' + connection.threadId);
    connection.query('CREATE DATABASE IF NOT EXISTS `foodnshit`;', () => {
        connection.query('USE `foodnshit`', () => {
            connection.query(`CREATE TABLE IF NOT EXISTS users (
                    id INT AUTO_INCREMENT PRIMARY KEY,
                    name VARCHAR(255) NOT NULL,
                    password VARCHAR(512) NOT NULL,
                    avatar VARCHAR(512),
                    status TINYINT NOT NULL default 1,
                    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP)  ENGINE=INNODB;`, () => {
            })
        })
    })
});

module.exports = connection;