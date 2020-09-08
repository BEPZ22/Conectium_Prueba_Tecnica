sq = require('../loader/sequealize');
const passport = require('../loader/passport');

module.exports = {

    login: async(req, res, next) => {
        try {
            passport.authenticate('local', async(err, user, info) => {
                if (err) {
                    return res.json({ logged: false, error: "error", message: err }).status(400);
                }
                if (!user) {
                    return res.json({ logged: false, error: "error", message: "Introduzca todos sus datos" }).status(400);
                }
                req.logIn(user, async(err) => {
                    if (err) {
                        return res.json({ logged: false, error: "error", message: err }).status(400);
                    }
                    let user_data = await sq.models.User.findOne({
                        attributes: ['id', 'name', 'last_name', 'email', ],
                        where: {
                            email: user
                        }
                    })
                    return res.json({ message: "Inicio de sesión éxitoso", user: user_data }).status(200);
                });
            })(req, res, next);
        } catch (err) {
            return res.json({ logged: false, error: "error", message: err }).status(400);
        }
    },

    check_if_logged: async(req, res, next) => {
        try {
            let user = await sq.models.User.findOne({
                attributes: ['id', 'name', 'last_name', 'email', ],
                where: {
                    email: req.session.passport.user
                },
            })

            return res.json({ logged: true, message: "El usuario está loggeado", user: user }).status(200)
        } catch (err) {
            logger.error(err.stack)
            return res.json({ logged: false, error: "error", message: err }).status(400);
        }
    },

    logout: async(req, res, next) => {
        try {
            req.logout()
            return res.json({ logged: false, message: "Sesión terminada con éxito" }).status(200)
        } catch (err) {
            return res.json({ logged: false, error: "error", message: err }).status(400);
        }
    },

}