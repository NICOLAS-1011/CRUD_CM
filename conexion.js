const mysql = require('mysql');

var conexion = mysql.createConnection({
    host: 'localhost',
    database: 'data_cm',
    user: 'root',
    password: ''
});

conexion.connect(function(error){
    if (error) {
        throw error;
    } else {
        console.log('CONEXIÓN ESTABLECIDA');
    }
});

module.exports = conexion;