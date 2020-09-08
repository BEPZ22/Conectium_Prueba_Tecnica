const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('../api')
const passport = require('./passport');
const origin = "http://localhost:4200";

module.exports = async (app) => {

    app.use(cors({ credentials: true, origin: origin }));
    app.use((req, res, next) => {
        res.header("Access-Control-Allow-Origin", origin);
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.header('Access-Control-Allow-Credentials', true);
        next();
    })

    app.use(passport.initialize());
    app.use(passport.session());

    app.use(bodyParser.urlencoded({ extended: true }));

    app.use('/api', routes());

    return app;
}