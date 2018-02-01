const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');

passport.use(
    new GoogleStrategy(
        {
            clientID: keys.googleClientID,
            clientSecret: keys.googleClientSecret,
            callbackURL: '/auth/google/callback',
            proxy: true
        },
        (accessToken, refreshToken, profile, done) => {
            User.findOne({ googleId: profile.id }).then(existingUser);
            console.log('access Token', accessToken);
            console.log('refresh Token', refreshToken);
            console.log('profile', profile);
            if (existingUser) {
                done(null, existingUser);
            } else {

            }
        }
    )
);