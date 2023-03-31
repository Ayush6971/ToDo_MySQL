const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const { validatePassword } = require('../controller/commonController')
const user = require('../models/users')

passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
},
    async (email, password, done) => {
        const findUser = await user.findOne({ email })
        if (!findUser) {
            return done(null, false, { message: 'Incorrect email.' });
        }
        if (!validatePassword(password, findUser.password)) {
            return done(null, false, { message: 'Incorrect password.' });
        }
        return done(null, findUser);
    }
));

passport.serializeUser((user, done) => {
    return done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    const findUser = await user.findOne({ id })
    return done(null, findUser);
});

module.exports = passport