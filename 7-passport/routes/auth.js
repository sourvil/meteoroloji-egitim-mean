var express = require('express');
var router = express.Router();

const env = require('env2')('./config.env');

module.exports = function (passport) {
    router.get('/success', function (req, res) {
        res.send({ state: 'success', user: req.user ? req.user : null });
    });

    router.get('/failure', function (req, res) {
        res.send({ state: 'failure', user: null, message: 'Invalid username or password' });
    });

    router.post('/login', passport.authenticate('login', {
        successRedirect: '/auth/success',
        failureRedirect: '/auth/failure'
    }));

    router.post('/signup', passport.authenticate('signup', {
        successRedirect: '/auth/success',
        failureRedirect: '/auth/failure'
    }));

    router.get('/signout', function (req, res) {
        req.logout();
        res.redirect('/');
    });

    //router.get('/socketurl', function (req, res) {
    //    console.log("auth/socketurl" + process.env.siteUrl + ":" + process.env.PORT);
    //    return res.json(process.env.siteUrl + ":" + process.env.PORT);
    //});

    return router;
}

