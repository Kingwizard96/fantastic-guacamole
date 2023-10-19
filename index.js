const inquirer = require('inquirer');
const db = require('./db/connection');
require('console.table');


function init() {
    inquirer.prompt([
    {
        type: 'list',
        name: 'choice',
        message: 'What would you like to do?',
        choices: ["View Departments", "View Roles", "View Employees", "Add Department", "Add Role", "Add Employee", "Update Employee Role", "Exit"]
    },
    ]).then((answer) => {
        console.log(answer);
        // switch
        if(answer.choice === "View Departments") {
            viewDepartments();
            // write  the logic to view departments
        }else if(answer.choice === "View Roles") {
            viewRoles();
        }else if(answer.choice === "View Employees") {
            viewEmployees();
        }else if(answer.choice === "Add Department") {
            addDepartment();
        }else if(answer.choice === "Add Role") {
            addRole();
        }else if(answer.choice === "Add Employee") {
            addEmployee();
        }else if(answer.choice === "Update Employee Role") {
            updateEmployeeRole();
        }else {
            console.log("Goodbye!");
            process.exit();
        }
            // write the logic to view roles
    });

};

    function viewDepartments() {
        console.log("Viewing Departments...");
        db.promise().query('SELECT * FROM department').then(([rows]) => {
            console.table(rows);
        }).then(() => {
            init();
        });
    };

    function viewRoles() {  
        console.log("Viewing Roles...");
        db.promise().query('SELECT * FROM role').then(([rows]) => {
            console.table(rows);
        }).then(() => {
            init();
        });
    };

    function viewEmployees() {
        console.log("Viewing Employees...");
        db.promise().query('SELECT * FROM employees').then(([rows]) => { 
            console.table(rows);
        }).then(() => {
            init();
        });
    };

    function addDepartment() {
        console.log("Adding Department...");
        inquirer.prompt([
            {
                type: 'input',
                name: 'department_name',
                message: 'What is the name of the department you would like to add?',
            },
        ]).then((answer) => {
            console.log(answer);
            db.promise().query('INSERT INTO department SET ?', answer).then(([rows]) => {
                console.table(rows);
                init();
            });
        });
    };

    function addEmployee() {    
       console.log("Adding Employee...");
       inquirer.prompt([
        {
            type: 'input',
            name: 'first_name',
            message: 'What is the first name of the employee you would like to add?',
            validate: nameInput => {
                if (nameInput) {
                  return true;
                } else {
                  console.log('Please enter the employee first name!');
                  return false;
                }
              }
        },
        {
            type: 'input',
            name: 'last_name',
            message: 'What is the last name of the employee you would like to add?',
            validate: nameInput => {
                if (nameInput) {
                  return true;
                } else {
                  console.log('Please enter the employee last name!');
                  return false;
                }
              }
        },
        {
            type: 'input',
            name: 'role_id',
            message: 'What is the role id of the employee you would like to add?',
            validate: nameInput => {
                if (nameInput) {
                  return true;
                } else {
                  console.log('Please enter the employee role id!');
                  return false;
                }
              }
        },
        {
            type: 'input',
            name: 'manager_id',
            message: 'What is the manager id of the employee you would like to add?',
            validate: nameInput => {
                if (nameInput) {
                  return true;
                } else {
                  console.log('Please enter the employee manager id!');
                  return false;
                }
              }
        },
       ]).then(answer => {
        console.log(answer);
        db.promise().query('INSERT INTO employees SET ?', answer).then(([rows]) => {
            console.table(rows);
            init();
        });
       });    
    };
    


init();