const express = require('express');
const router_crud = require('./rutas');
const app = express();
const port = 3500


app.get('/', (req, res) => {
    res.send("Hola Servirolle")
});

app.get('/login', (req, res) => {
    res.send("login")
});

router_crud(app)

app.listen(port, () => {
    console.log('Alo puertillo ' + port)
});
