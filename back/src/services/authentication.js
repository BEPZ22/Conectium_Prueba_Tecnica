sq = require('../loader/sequealize');
const passport = require('./validator/passport');

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
            logger.error(err.stack)
            return res.json({ logged: false, error: "error", message: err }).status(400);
        }
    },

    logout: async (req, res) =>{

    }

}