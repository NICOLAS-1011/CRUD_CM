const express = require('express');
const router_crud = require('./rutas');
const app = express();
const port = 3500

//AUTORIZAR USO DEL FORMATO
app.use(express.json())

router_crud(app)

//PUERTO DEFINIDO PARA EJECUTARSE
app.listen(port, () => {
    console.log('SERVIDOR EN PUERTO: ' + port)
});



