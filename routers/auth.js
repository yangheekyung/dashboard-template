const express = require('express');
const passport = require('passport');
const router = express.Router();

const loginOption = {scope: ['profile','email','openid',]};
const callbackOption = {successRedirect : '/', failureRedirect: '/auth/login'};
router.get('/auth/login', passport.authenticate('google', loginOption));
router.get('/auth/callback', passport.authenticate('google', callbackOption));
router.get('/auth/logout', (req, res) => {req.logout(); return res.redirect('/auth/login')});

module.exports = router;