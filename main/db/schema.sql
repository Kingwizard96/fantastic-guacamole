DROP DATABASE IF EXISTS employee_tracker ;
CREATE DATABASE employee_tracker;

USE employee_tracker;

CREATE TABLE department (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    department_name VARCHAR(30) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE roles (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
    role_title VARCHAR(30) NOT NULL,
    role_salary DECIMAL(10,2) NOT NULL,
    department_id INT NOT NULL,    
);