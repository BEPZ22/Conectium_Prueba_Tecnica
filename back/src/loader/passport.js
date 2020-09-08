const passport = require('passport'),
LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
sq = require('../loader/sequealize');

passport.use(new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password'
    },
    async(email, password, done) => {

        const result = await sq.models.User.findOne({
            where: {
                email: email,
            }
        });

        if (result !== null) {

            const user = result.get({ plain: true });
            const match = await bcrypt.compare(password, user.password);

            if (match) {
                return done(null, email);
            } else {
                return done('Contrasena incorrecta', false);
            }
        } else {
            return done('El usuario no existe', false);
        }
    }
));

passport.serializeUser((user, done) => {
    if (user) done(null, user);
});

passport.deserializeUser((id, done) => {
    done(null, id);
});

module.exports = passport;