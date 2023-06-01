const mysql = require('mysql');

//DATOS LOCALES DE USUARIO DE ACCESO
var conexion = mysql.createConnection({
    host: 'localhost',
    database: 'data_cm',
    user: 'root',
    password: ''
});

//MENSAJE DE CONFIRMACION DE CONEXION
conexion.connect(function(error){
    if (error) {
        throw error;
    } else {
        console.log('CONEXIÓN A BD ESTABLECIDA');
    }
});

module.exports = conexion;