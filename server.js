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
//  eTracker();
// });

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
  
                case 'Delete a Role':
                deleteRole();
                break;

                case 'Delete a Department':
               deleteDepartment();
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
          console.log(chalk.yellow('Added ' + answer.addDept + " to departments!")); 
          viewDepartments();
           
      });
    });
  })
};

// Add an employee
const addEmployee = () => {
        inquirer.prompt([
                {
                    name: 'first_name',
                    type: 'input',
                    message: "What is the employee's first name?",
                },
                {
                    name: 'last_name',
                    type: 'input',
                    message: "What is the employee's last name?",
                },
                {
                    name: 'role_id',
                    type: 'input', 
                    message: 'What is the role ID of your employee?',
                },
                {
                    name: 'manager_id',
                    type: 'input',
                    message: "What is the manager's id?",
                },
            ])
            .then((answer) => {
                connection.query(
                  "INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)",
                  [answer.first_name, answer.last_name, answer.role_id, answer.manager_id],
                  function (err, res) {
                      if (err) throw err;
                     console.table(chalk.yellow (' Employee '+ answer.first_name +' has been added.'));
                    //   console.log("Employee has been added.");

                viewEmployees();
              } 
             );
            });
         };
            
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
            name: "newRole",
            type: "input",
            message: "What is the new role?",
          },
          {
            name: "newSalary",
            type: "input",
            message: "What is the salary amount for the new role:",
          },
          {
            name: "deptID",
        type: "input",
        message: "What is the department ID number?",
      },
    ])

    .then((answer) => {
      connection.query( "INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)",
        [answer.newRole, answer.newSalary, answer.deptID],
        function (err, res) {
          if (err) throw err;
          console.log(chalk.yellow(answer.newRole + " has been added to role!"));

          viewRoles();
        }
      );
    });
})
};

// Delete an employee
const deleteEmployee = () => {
    connection.query('SELECT * FROM employee', (err, results) => {
      if (err) throw err;
  
      console.table(results);
  
      inquirer
        .prompt([
          {
            name: "removeID",
            type: "input",
            message: "Enter the Employee ID to be removed:",
          },
        ])
        .then((answer) => {
          connection.query(`DELETE FROM employee WHERE ?`, {
            id: answer.removeID,
          });
          console.log(chalk.yellow("Employee id " + answer.removeID + " has been removed."));

          viewEmployees();
        })
    })
  };


// Delete a role
  const deleteRole = () => {
    connection.query('SELECT * FROM role', (err, results) => {
      if (err) throw err;
  
      console.table(results);
  
      inquirer
        .prompt([
          {
            name: "deleteRole",
            type: "input",
            message: "Enter the Employee ID to be removed:",
          },
        ])
        .then((answer) => {
          connection.query(`DELETE FROM role WHERE ?`, {
            id: answer.deleteRole,
          });
          console.log(chalk.yellow("Employee id " + answer.deleteRole + " has been removed."));

         viewRoles();
        })
    })
  };

// Delete a Department
const deleteDepartment = () => {
    let sql =   `SELECT department.id, department.name FROM department`;
    connection.query(sql, (error, response) => {
      if (error) throw error;
      let departmentNamesArray = [];
      response.forEach((department) => {departmentNamesArray.push(department.name);});

      inquirer
        .prompt([
          {
            name: 'deleteDept',
            type: 'list',
            message: 'Which department would you like to remove?',
            choices: departmentNamesArray
          }
        ])
        .then((answer) => {
          let departmentId;

          response.forEach((department) => {
            if (answer.deleteDept === department.name) {
              departmentId = department.id;
            }
          });

          let sql = `DELETE FROM department WHERE department.id = ?`;
          connection.query(sql, [departmentId], (error, response) => {
            if (error) throw error;
          console.log(chalk.yellow(answer.deleteDept + " has been successfully Removed"));
            
           viewDepartments();
            })
        })
      })
    };
   
    function exit() {
            console.log('Goodbye!');
           connection.end();
    }
    // Main Function
 eTracker();
});
