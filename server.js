// Dependencies
// const express = require('express');
const connection = require('./db/connection');
// const mysql = require('mysql2');
// require('dotenv').config();
const inquirer = require('inquirer');
const cTable = require('console.table');
const chalk = require('chalk');    // https://bobbyhadz.com/blog/javascript-chalk-error-err-require-esm-of-es-module
const figlet = require('figlet');


// Database Connect and Starter Title
    connection.connect((err) => {
    // if (err) throw err;
    if (err) {
        return console.error('error: ' + err.message);
      }
    
      console.log('Connected to the MySQL server.');

      console.table(
        chalk.yellow.bold(
          `====================================================================================`
        )
      );
      console.log(``);
      console.table(chalk.greenBright.bold(figlet.textSync("Employee Tracker")));
      console.log(``);
      console.log(``);
      console.table(
        chalk.yellow.bold(
          `====================================================================================`
        )
      );

      //   Main Function
 eTracker();
});