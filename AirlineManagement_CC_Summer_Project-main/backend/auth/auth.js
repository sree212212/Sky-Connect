
const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const User = require('../models/User')
var bodyParser = require('body-parser')
const bcrypt = require('bcrypt');




passport.use('login', new localStrategy({
    usernameField: 'email',
    passwordField: 'password'
}, async (email, password, done) => {
    try {

  
        const user = await User.findOne({ email });
        if (user === null) {
         
            return done(null, false, { message: 'User not found' });
        }
      
        const validate1 = await bcrypt.compare(password, user.password, function (err, result) {
            if (err) console.log(err);
            if (result) return done(null, user, { message: 'Logged in Successfully' });
            else return done(null, false, { message: 'Wrong Password' });
        });
    } catch (error) {
        return done(error);
    }
}));

const JWTstrategy = require('passport-jwt').Strategy;

const ExtractJWT = require('passport-jwt').ExtractJwt;


passport.use(new JWTstrategy({
    //secret we used to sign our JWT
    secretOrKey: 'top_secret',
    //we expect the user to send the token as a query parameter with the name 'secret_token'
    jwtFromRequest: ExtractJWT.fromUrlQueryParameter('secret_token')
}, async (token, done) => {
    try {
        //Pass the user details to the next middleware
        return done(null, token.user);
    } catch (error) {
        done(error);
    }
}));
