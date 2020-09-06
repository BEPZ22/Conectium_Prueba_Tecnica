const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const routes = require("./src/routes");
const config = require('./src/config/config');
const passport = require('./src/services/validator/passport');
const bd = require("./src/loader/sequealize");

async function startServer() {
    const app = express();

    app.use(bodyParser.json());

    app.listen(config.port, () => {
        console.log(`El servidor está inicializado en el puerto ${ config.port }`);
    });
    
    app.use(cors());

    app.use(passport.initialize());

    app.use(passport.session());

    await bd(app);
    
    routes.assignRoutes(app);
}

startServer()
