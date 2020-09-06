const { Sequelize, DataTypes, Model } = require('sequelize');

module.exports = (sequelize, type) => {

    return sequelize.define('User', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Por favor, ingrese su nombre'
                }
            }
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Por favor, ingrese su apellido'
                }
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                notNull: {
                    msg: 'Por favor, ingrese su correo electrónico'
                }
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Por favor, ingrese su contraseña'
                }
            }
        }

    });
}