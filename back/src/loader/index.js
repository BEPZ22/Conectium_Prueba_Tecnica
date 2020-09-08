const expressLoader = require('./express');
const sequelizeLoader = require('./sequealize');

module.exports = async (expressApp) => {
    await expressLoader(expressApp);
    console.log('Express Initialized');

    await sequelizeLoader(expressApp);
    console.log('Sequelize Initialized');
}