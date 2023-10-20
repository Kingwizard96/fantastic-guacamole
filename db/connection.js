const mysql = require('mysql2');

// Connect to database
const db = mysql.createConnection(
    {
        host: '127.0.0.1',
        //  MySQL username,
        user:'root',
        //  MySQL password (error will happen if you don't have a password)
        password: '2442@Wizard!',
        database: 'tracker_db'
    },
    console.log(`Connected to the tracker_db database.`)
);

module.exports = db;