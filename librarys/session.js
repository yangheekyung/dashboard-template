const session = require('express-session');

const sessionOption = {
  secret : process.env.SERVER_SECRET,
  cookie: { maxAge: 60 * 60 * 1000 },
  resave: false,
  saveUninitialized: true
};

module.exports = session(sessionOption);