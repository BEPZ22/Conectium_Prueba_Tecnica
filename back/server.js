const express = require('express');
const config = require('./src/config/config');

async function startServer() {
    const app = express();

    await require('./src/loader')(app);

    app.listen(config.port, err => {
        if (err) {
            process.exit(1);
            return;
        }
        console.log(`Server listening on port: ${config.port}`)
    });
}

startServer()
