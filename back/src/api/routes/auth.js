const app = require('express')
const bodyParser = require('body-parser')
const auth_middleware = require('../middlewares/auth-check');
const auth = require('../../services/authentication');
const route = app.Router();

module.exports = (app) => {   
    
    app.use('/auth', route);

    route.use(bodyParser.json())
    route.use(bodyParser.urlencoded({ extended: true }))

    route.post('/login', auth.login);
    route.get('/check', auth_middleware, auth.check_if_logged);
    route.get('/logout', auth_middleware, auth.logout)

}