INSERT INTO department(name)
VALUES 
('Operations'),
('Sales'),
('Finance'),
('Legal'),  
('IT');

INSERT INTO role (title, salary, department_id)
VALUES
('Regional Manager', 90000, 1),
('Human Resource Representative', 64000, 1),
('Receptionist', 41000, 1),
('Sales Representative', 60000, 2),
('Accounts Manager', 82000,3 ),
('Accountant', 71000, 3),
('Attorney', 100000, 4),
('Senior Software Engineer', 94000, 5),
('Full Stack Developer', 70000, 5);


INSERT INTO employee(first_name, last_name, role_id, manager_id) 
VALUES
('Elle', 'Varner', 1, 2),
('Tamar', 'Braxton', 9, 6),
('Laila', 'Ali', 9, NULL),
('Malik', 'Yoba', 6, 3),
('Kanye', 'West', 3, NULL),
('Will', 'Smith', 8, 4),
('Kobe', 'Bryant', 2, NULL),
('James', 'Evans', 5, NULL),
('Peter', 'Dinklage', 7, 5),
('Janet', 'Jackson', 4, 1);

