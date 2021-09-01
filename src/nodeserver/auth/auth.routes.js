const Control = require('./auth.controller');

module.exports = (router) => {
    router.post('/register', Control.createUser);
    router.post('/login', Control.loginUser);
    //router.post('/registraritem', Control.guardaInventario );
    
}