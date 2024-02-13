'use strict';
const mysql = require('mysql');


//local connection
const dbConn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Shivu@16",
    database: "grocerydb",
    port: 3306,
    multipleStatements: true

});

dbConn.connect(function (err) {

    try {
        console.log('Database connected..Yey!');
    }
    catch (err) {
        console.log('error is ', err);
    }
});

module.exports = dbConn;

