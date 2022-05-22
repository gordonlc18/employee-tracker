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

// Inquirer prompt
const eTracker = () => {
    inquirer.prompt({
        name: 'action',
        type: 'list',
        message: 'Please select a task?',
        choices: [
            'View All Departments',
            'View All Employees',
            'View All Roles',
            'Update Employee Roles',
            'Add a Department',
            'Add an Employee',
            'Add a Role',
            'Delete an Employee',
            'Delete a Department',
            'Delete a Role',
            "Exit",
        ],
    })
    .then((answer) => {
        switch (answer.action) {
            case 'View a Department':
                viewDepartments();
                break;
  
            case 'View Employees':
                viewEmployees();
                break;
  
                case 'View a Role':
                    viewRoles();
                    break;

                case 'Update Employee Roles':
                updateRole();
                break;

            case 'Add a Department':
                addDepartment();
                break;
  
                case 'Add an Employee':
                addEmployee();
                break;
  
                case 'Add a Role':
                    addRole();
                    break;
  
                case 'Delete an Employee':
                    deleteEmployee();
                    break;
  
            case 'Delete a Department':
               deleteDepartment();
                break;
  
                case 'Delete a Role':
                deleteRole();
                break;
  
            case 'Exit':
                exit();
                break;
  
            default:
                console.log(`Invalid action: ${answer.action}`);
                break;
        }
    });
  };
