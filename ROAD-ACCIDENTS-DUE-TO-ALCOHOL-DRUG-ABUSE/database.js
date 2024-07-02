const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    database: 'road_accidents',
    user: 'root',
    password: 'bhargav'
});

connection.connect(function (err) {
    if (err) {
        console.log(err);
    } else {
        callme();
    }
});

function callme() {
    connection.query("select count(*) from personal_details", function (err, result, field) {
        console.log(result);
    });
}