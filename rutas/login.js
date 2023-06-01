const express = require('express');
const router = express.Router();

//NO FUE POSIBLE EL CAMBIO DE PUERTO ANGULAR DE 4200 A 4500

router.get('/', (req, res) => {
    res.send("Login en puerto 4200/login")
});



module.exports = router;