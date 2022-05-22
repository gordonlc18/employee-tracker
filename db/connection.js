require('dotenv').config();
const mysql = require('mysql2');

// Connect MySQL Database 
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
    });

    module.exports = connection;
// https://stackoverflow.com/questions/69411884/trying-to-use-a-env-file-inside-my-project
