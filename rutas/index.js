const users_router = require('./users');
const login_router = require('./login');


function router_crud(app) {
    app.use('/users', users_router);
    app.use('login', login_router);
}

module.exports = router_crud;