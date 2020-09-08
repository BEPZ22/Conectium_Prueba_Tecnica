const app = require('express')
const bodyParser = require('body-parser')
const user = require('../../services/users');
const route = app.Router();

module.exports = (app) => {     
    app.use('/user', route);

    route.use(bodyParser.json())
    route.use(bodyParser.urlencoded({ extended: true }))

    route.get('/get', user.get_all_users);
    route.post('/register', user.register_user);

}