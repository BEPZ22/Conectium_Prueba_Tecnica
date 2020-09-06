const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    mySql_port: process.env.PORT_MYSQL,
    mySql_db: process.env.DB_MYSQL,
    mySql_password: process.env.PASSWORD_MYSQL,
    mySql_user: process.env.USER_MYSQL,
    mySql_host: process.env.DB_MYSQL_URI,
    port: process.env.PORT,
}