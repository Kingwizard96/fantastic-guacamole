const inquirer = require('inquirer');
const db = require('./db/connection');
require('console.table');

function init() {
    inquirer.prompt([
    {
        type: 'list',
        name: 'choice',
        message: 'What would you like to do?',
        choices: ["View Departments", "View Roles", "View Employees"]
    },
    ]).then((answer) => {
        console.log(answer);
        // switch
        if(answer.choice === "View Departments") {
            viewDepartments();
            // write  the logic to view departments
        }
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
        db.promise().query('SELECT * FROM employee').then(([rows]) => { 
            console.table(rows);
        }).then(() => {
            init();
        });
    };


init();