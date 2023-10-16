const express = require('express');
const mysql = require('mysql2');
const inquirer = require('inquirer');
const cTable = require('console.table');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());



// Connect to database
const db = mysql.createConnection(
    {
        host: '127.0.0.1',
        //  MySQL username,
        user:'root',
        //  MySQL password
        password: '2442@Wizard!',
        database: 'tracker_db'
    },
    console.log(`Connected to the tracker_db database.`)
);