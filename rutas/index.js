const users_router = require('./users');
const login_router = require('./login');

//EXPORTA LAS DOS RUTAS CON USO A EL OTRO INDEX

function router_crud(app) {
    app.use('/users', users_router);
    app.use('/login', login_router);
}

module.exports = router_crud;