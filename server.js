require('dotenv').config();

const next = require('next');
const express = require('express');
const session = require('./librarys/session');
const passport = require('./librarys/passport');
const authRouter = require('./routers/auth');

const dev = process.env.NODE_ENV !== 'production';
const port = parseInt(process.env.SERVER_PORT);
const app = next({dev});
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.use(session);
  server.use(passport.initialize());
  server.use(passport.session());
  server.use(authRouter);

  server.all('/api/*', (req, res) => {
    if(!req.isAuthenticated()) return res.json({session : false});
    return handle(req, res);
  });
  server.get('*', (req, res) => {
    if(!req.isAuthenticated()) return res.redirect('/auth/login');
    return handle(req, res);
  });

  server.listen(port, (err) => {
    if(err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});