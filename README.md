# Employee Tracker ![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)

_by Latravia Gordon_</br>

## Description

> > > Developers frequently have to create interfaces that allow non-developers to easily view and interact with information stored in databases. These interfaces are called content management systems (CMS). <br>Your assignment this week is to build a command-line application from scratch to manage a company's employee database, using Node.js, Inquirer, and MySQL.

## Table of Contents

- [Requirements](#requirements)
- [Installation](#installation)
- [Usage](#usage)
  <!-- - [Walkthrough](#walkthrough) -->
  <!-- - [Screenshot](#screenshot) -->
- [Tests](#tests)
- [Questions](#questions)
- [License](#license)

# Requirements

<!-- ![User Story and Acceptance Criteria]() -->

> User Story: </br>
> AS A business owner
> I WANT to be able to view and manage the departments, roles, and employees in my company
> SO THAT I can organize and plan my business

---

> Acceptance Criteria: </br>
> GIVEN a command-line application that accepts user input
> WHEN I start the application
> THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
> WHEN I choose to view all departments
> THEN I am presented with a formatted table showing department names and department ids
> WHEN I choose to view all roles
> THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
> WHEN I choose to view all employees
> THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
> WHEN I choose to add a department
> THEN I am prompted to enter the name of the department and that department is added to the database
> WHEN I choose to add a role
> THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
> WHEN I choose to add an employee
> THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
> WHEN I choose to update an employee role
> THEN I am prompted to select an employee to update and their new role and this information is updated in the database

## Installation

This application requires `Node.js`, `Inquirer`, `console.table` and `mysql2`. To start application `run npm start`. MySQL is required to store company and employee information. Run `mysql -u root -p` to view the database.

# Usage

![Employee Tracker](./assets/images/EmployeeTracker.gif)

<!-- # Walkthrough -->

Walkthrough video can be found via [YouTube](https://youtu.be/oXdR0dTc__o).

<!-- # Screenshot -->

<!-- ![CreateProduct](./assets/images/createProd.jpeg) -->

<!-- ![DeleteCategory](/Develop/./assets/images/deleteCat.jpeg)
![UpdateCategory](/Develop/./assets/images/updateCat.jpeg)
![UpdateTag](/Develop/./assets/images/updateTag.jpeg) -->

## Tests

- There are no test for this application.

## Questions

For any questions about the project, please contact me by either of the following links:

- Email = gordonlc18@gmail.com
  or visit my GitHub profile:
- GitHub - [gordonlc18](https://github.com/gordonlc18)

## License

This project is licensed under the MIT license.
