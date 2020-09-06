const sequelize = require('sequelize');
const config = require('../config/config');

module.exports = async() => {
    console.log(config.mySql_db)
    sq = new sequelize.Sequelize(config.mySql_db, config.mySql_user, config.mySql_password, {
        host: config.mySql_host,
        port: config.mySql_port,
        dialect: 'mysql'
    });

    const userModel = require('../model/user');

    const User = userModel(sq, sequelize.Sequelize);

    await sq.sync({ force: true });

    let models = {
        sq,
        User
    }

    return models
}