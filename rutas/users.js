const express = require('express');
const router = express.Router();
const conexion = require('../conexion');

router.post('/add', (req, res) => {
    const { _id, name, last_name, password, _date } = req.body;
    const query = `INSERT INTO users (_id, name, last_name, password, _date) VALUES('${_id}', '${name}', '${last_name}', '${password}', '${_date}')`;

    conexion.query(query , function(error, resultados, campos) {
        if (error) {
            throw error;
        } else {
            res.json({'message': 'Se ha agregado un nuevo usuario'});
        }
    });
});

router.put('/update/', (req, res) => {

    const {name, last_name, password, _date, _id} = req.body;

    conexion.query(`UPDATE users SET name = "${name}", last_name = "${last_name}", password = "${password}", _date = "${_date}" WHERE _id = "${_id}"`, function(error, resultados, campos) {

        if (error) {
            throw error;
        } else {
            res.send({'message': `Usuario ID:${_id} actualizado○`})
            res.send(resultados);
        }
    });
});


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


router.get('/all', (req, res) => {
    conexion.query('SELECT * FROM users', function(error, resultados, campos) {
        if (error) {
            throw error;
        } else {
            res.send(resultados);
        }
    });
});

router.get('/:id', (req, res) => {
    const {id} = req.params;
    res.json({
        name: 'algo',
        id
    })
});


module.exports = router;
