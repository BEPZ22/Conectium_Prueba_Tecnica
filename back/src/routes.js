const user = require('../src/services/users');
const login = require('../src/services/authentication');
module.exports = {
    
    assignRoutes : function(app){
        app.get('/user/:id', user.get_user);
        app.post('/user', user.add_user);
        app.post('/login', login.login);
    }
    
}