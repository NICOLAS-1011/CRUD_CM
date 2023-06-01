const express = require('express');
const router_crud = require('./rutas');
const app = express();
const port = 3500

app.use(express.json())

router_crud(app)

app.listen(port, () => {
    console.log('Alo puertillo ' + port)
});



