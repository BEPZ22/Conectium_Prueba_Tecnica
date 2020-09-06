sq = require('../loader/sequealize');
const user_validation = require('./validator/user');
const Joi = require('joi');
const bcrypt = require('bcrypt');
// const error_handler = require('../errors/error_handler')
// const logger = require('../loaders/logger');


module.exports = {

    // /**Get all the users */
    // get_all_users: async(req, res) => {
    //     try {
    //         const users = await sq.models.User.findAll({
    //             attributes: ['id', 'name', 'last_name', 'email', ],
    //             include: sq.models.Role
    //         });
    //         return res.json(users).status(200);
    //     } catch (error) {
    //         return res.json(err).status(400);
    //     }
    // },

    /** Get user by Id */
    get_user: async(req, res) => {
        try {
            const users = await sq.models.User.findByPk(req.params.user_id, {
                attributes: ['id', 'name', 'last_name', 'email', ]
            });
            return res.json(users).status(200);
        } catch (error) {
            return res.json(err).status(400);
        }
    },

    /**Add an user */
    add_user: async(req, res) => {
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

    // /** Update User */
    // update_user: async(req, res) => {
    //     try {
    //         Joi.assert(req.body, user_validation.update_schema);
    //         await sq.models.User.update({
    //             name: req.body.name,
    //             last_name: req.body.last_name,
    //             email: req.body.email,
    //             password: req.body.password ? bcrypt.hashSync(req.body.password, 10) : undefined
    //         }, {
    //             where: {
    //                 id: req.body.user_id
    //             }
    //         });

    //         let user = await sq.models.User.findByPk(req.body.user_id);
    //         await user.setRoles(await sq.models.Role.findByPk(req.body.role_id))
    //         return res.json({ 'message': "Usuario actualizado con éxito" }).status(200);
    //     } catch (error) {
    //         return res.json(err).status(400);
    //     }
    // },

    // /** Delete user */
    // delete_user: async(req, res) => {
    //     try {
    //         await sq.models.User.destroy({
    //             where: {
    //                 id: req.body.user_id
    //             }
    //         });
    //         return res.json({ 'message': "Usuario eliminado con éxito" }).status(200);
    //     } catch (error) {
    //         return res.json(err).status(400);
    //     }
    // }
}