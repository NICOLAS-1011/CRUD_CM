const express = require('express');
const router = express.Router();
const conexion = require('../conexion');


//PROCEDIMIENTO PARA AÑADIR USUARIOS A LA BASE DE DATOS
//RUTA: LOCALHOST:3500/USERS/ADD

router.post('/add', (req, res) => {
    const { _id, name, last_name, password, _date } = req.body;
    const query = `INSERT INTO users (_id, name, last_name, password, _date) VALUES('${_id}', '${name}', '${last_name}', PASSWORD('${password}'), '${_date}')`;

    conexion.query(query , function(error, resultados, campos) {
        if (error) {
            throw error;
        } else {
            res.json({'message': 'Se ha agregado un nuevo usuario'});
        }
    });
});

//PROCEDIMIENTO PARA ACTUALIZAR USUARIOS DE LA BASE DE DATOS
//RUTA: LOCALHOST:3500/USERS/UPDATE

router.put('/update/', (req, res) => {

    const {name, last_name, password, _date, _id} = req.body;

    conexion.query(`UPDATE users SET name = '${name}', last_name = '${last_name}', password = PASSWORD('${password}'), _date = '${_date}' WHERE _id = '${_id}'`, function(error, resultados, campos) {

        if (error) {
            throw error;
        } else {
            res.send({'message': `Usuario ID:${_id} actualizado○`})
            res.send(resultados);
        }
    });
});

//PROCEDIMIENTO PARA ELIMINAR USUARIOS DE LA BASE DE DATOS
//RUTA: LOCALHOST:3500/USERS/DELETE

router.delete('/delete', (req, res) => {
    const{_id} = req.body;

    conexion.query(`DELETE FROM users WHERE _id = "${_id}"`, function(error, resultados, campos){
        if(error){
            throw error;
        } else {
            res.send({'message': `Usuario ID: ${_id} eliminado`})
        }
    })
});

//PROCEDIMIENTO PARA VER TODOS LOS USUARIOS DE LA BASE DE DATOS
//RUTA: LOCALHOST:3500/USERS/ALL


router.get('/all', (req, res) => {
    conexion.query('SELECT * FROM users', function(error, resultados, campos) {
        if (error) {
            throw error;
        } else {
            res.send(resultados);
        }
    });
});

//PROCEDIMIENTO PARA VER USUARIOS EN ESPECIFICO DE LA BASE DE DATOS
//RUTA: LOCALHOST:3500/USERS/(NUMERO DE ID)

router.get('/:_id', (req, res) => {
    const {_id} = req.params;

    conexion.query(`SELECT * FROM users WHERE _id = "${_id}"`, function(error, resultados, campos) {
        if (error) {
            throw error;
        } else {
            res.json(resultados);
        }
    });
});


module.exports = router;