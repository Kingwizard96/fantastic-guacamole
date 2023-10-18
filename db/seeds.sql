INSERT INTO departments(department_name)
VALUES ('Sales'),
       ('Engineering'),
       ('Finance'),
       ('Legal');

INSERT INTO roles(title, salary, department_id)
VALUES ("Sales Representative", 60000, 1),
       ("Sales Lead", 80000, 1),
       ("Software Engineer", 75000, 2),
       ("Lead Engineer", 95000, 2),
       ("Accountant", 65000, 3),
       ("Legal Team Lead", 25000, 4),
       ("Lawyer", 19000, 4);

INSERT INTO employees(first_name, last_name, role_id, manager_id) 
VALUES ("Ricky","Bobby", 4, NULL),
       ("Gon", "Freecss", 2, 1 ),
       ("Peter","Parker", 3, NULL),
       ("Mary","Jane", 4, 1 ),
       ("Dee","Reynolds",3 ,NULL),   
       ("Roronoa", "Zoro" 2, NULL)
       ("Mikasa", "Ankerman", 1, 1);
       

