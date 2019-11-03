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
    connection.query('CREATE DATABASE IF NOT EXISTS `foodnshit`;', function(){
        connection.query('USE `foodnshit`', function(){
            connection.query(`CREATE TABLE IF NOT EXISTS users (
                    id INT AUTO_INCREMENT PRIMARY KEY,
                    name VARCHAR(255) NOT NULL,
                    password VARCHAR(512) NOT NULL,
                    avatar VARCHAR(512),
                    status TINYINT NOT NULL default 1,
                    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP)  ENGINE=INNODB;`, function(){
                connection.query(`CREATE TABLE IF NOT EXISTS ingredients (
                id INT AUTO_INCREMENT PRIMARY KEY,
                title VARCHAR(255) NOT NULL,
                image VARCHAR(512),
                status TINYINT NOT NULL default 1,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP)  ENGINE=INNODB;`, function(){
                    connection.query(`CREATE TABLE IF NOT EXISTS recipes (
                id INT AUTO_INCREMENT PRIMARY KEY,
                title VARCHAR(255) NOT NULL,
                image VARCHAR(512),
                description VARCHAR(2048),
                status TINYINT NOT NULL default 1,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP)  ENGINE=INNODB;`, function(){
                        connection.query(`CREATE TABLE IF NOT EXISTS resipes_ingredients_link (
                ingredient_id INT,
                recipe_id INT,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                 FOREIGN KEY (ingredient_id) REFERENCES ingredients(id),
                 FOREIGN KEY (recipe_id) REFERENCES recipes(id),
                 PRIMARY KEY (ingredient_id,recipe_id)
                )  ENGINE=INNODB;`, function(){
                            console.log("OMG SERVER IS READY!");
                        })
                    })
                })
            })
        })
    })
});

module.exports = connection;