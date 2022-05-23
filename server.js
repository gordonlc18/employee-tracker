// Dependencies
const connection = require('./db/connection');
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
      console.table(chalk.yellow("\n WELCOME TO EMPLOYEE TRACKER \n"));

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

// Main Function
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
            'Delete a Role',
            'Delete a Department',
            
            "Exit",
        ],
    })
    .then((answer) => {
        switch (answer.action) {
            case 'View All Departments':
                viewDepartments();
                break;
  
            case 'View All Employees':
                viewEmployees();
                break;
  
                case 'View All Roles':
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

// Show all departments 
const viewDepartments = () => {
    console.log('Showing all departments...\n');
    const query = "SELECT * FROM department";
    connection.query(query, (error, res) => {
        if (error) throw error;
		console.table(' Current Departments:', res);
        eTracker();
    });
};

// Show all employees 
const viewEmployees = () => {
    console.log('Showing all employees...\n');
    const query = "SELECT * FROM employee";
    connection.query(query, (error, res) => {
        if (error) throw error;
		console.table(' Current Employees:', res);
        eTracker();
    });
};

// Show all roles 
const viewRoles = () => {
    console.log('Showing all roles...\n');
    const query = "SELECT * FROM role";
    connection.query(query, (error, res) => {
        if (error) throw error;
		console.table(' Current Roles:', res);
        eTracker();
    });
};

// Add a department 
const addDepartment = () => {
    const query = "SELECT * FROM department";
  connection.query(query, (err, results) => {
    if (err) throw err;

    console.log(chalk.blue("List of current departments"));

    console.table(results);
    inquirer.prompt([
      {
        name: 'addDept',
        type: 'input', 
        message: "What department would you like to add?",
        validate: newDept => {
          if (newDept) {
              return true;
          } else {
              console.log('Please enter a department');
              return false;
          }
        }
      }
    ])
      .then(answer => {
        const sql = `INSERT INTO department (name)
                    VALUES (?)`;
        connection.query(sql, answer.addDept, (err, result) => {
          if (err) throw err;
          console.log('Added ' + answer.addDept + " to departments!"); 
          eTracker();
           
      });
    });
  })
};

// Add an employee


// Add new role
const addRole = () => {
    const addRoleQuery = "SELECT * FROM role";
  connection.query(addRoleQuery, (err, results) => {
    if (err) throw err;

    console.log(chalk.blue("List of current roles"));
    console.table(results[0]);

  
      inquirer
        .prompt([
          {
            name: "newTitle",
            type: "input",
            message: "What is the new title?",
          },
          {
            name: "newSalary",
            type: "input",
            message: "What is the salary amount for the new title:",
          },
          {
            name: "deptID",
        type: "input",
        message: "What is the department ID number?",
      },
    ])
    .then((answer) => {
      connection.query( "INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)",
        [answer.newTitle, answer.newSalary, answer.deptID],
        function (err, res) {
          if (err) throw err;
          console.log(answer.newTitle + " has been added to roles!");

          eTracker();
        }
      );
    });
})
};

// Delete an employee


 // Delete a role


 // Delete a department


function exit() {
    // console.log('Goodbye!');
      connection.end();
  }

