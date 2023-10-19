INSERT INTO department(department_name)
VALUES ('Sales'),
       ('Engineering'),
       ('Finance'),
       ('Legal');

INSERT INTO role(title, salary, department_id)
VALUES ("Sales Representative", 60000, 1),
       ("Sales Lead", 80000, 1),
       ("Software Engineer", 75000, 2),
       ("Lead Engineer", 95000, 2),
       ("Accountant", 65000, 3),
       ("Legal Team Lead", 25000, 4),
       ("Lawyer", 19000, 4);

INSERT INTO employees(first_name, last_name, role_id, manager_id)
VALUES  ("ichigo", "kurusaki", 3, 24),
        ("sasuke", "uchiha", 4, 25),
        ("naruto", "uzumaki", 5, 26),
        ("sakura", "haruno", 6, NULL),
        ("hinata", "hyuga", 7, 28),
        ("itachi", "uchiha",1, NULL);


