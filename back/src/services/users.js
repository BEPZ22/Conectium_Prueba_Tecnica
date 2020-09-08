sq = require('../loader/sequealize');
const user_validation = require('./validator/user');
const Joi = require('joi');
const bcrypt = require('bcrypt');


module.exports = {

    get_all_users: async(req, res) => {
        try {
            const users = await sq.models.User.findAll({
                attributes: ['id', 'name', 'last_name', 'email', ],
            });
            return res.json(users).status(200);
        } catch (error) {
            return res.json(err).status(400);
        }
    },

    register_user: async(req, res) => {
        try {
            Joi.assert(req.body, user_validation.create_schema);
            let user = await sq.models.User.create({
                name: req.body.name,
                last_name: req.body.last_name,
                email: req.body.email,
                password: bcrypt.hashSync(req.body.password, 10)
            });

            return res.json({ 'message': "Usuario registrado con éxito" }).status(200);

        } catch (error) {
            return res.json({ 'message': error }).status(400);
        }

    },

}