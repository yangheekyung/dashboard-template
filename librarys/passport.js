const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

const passportOption = {
  clientID : process.env.GOOGLE_ID,
  clientSecret : process.env.GOOGLE_SECRET_ID,
  callbackURL : process.env.GOOGLE_CALLBACK_URL
};
const passportCallback = async (accessToken, refreshToken, profile, done) =>
  done(null, {accessToken, refreshToken, ...profile._json});
const google =new GoogleStrategy(passportOption, passportCallback);

passport.use(google);
passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user));

module.exports = passport;