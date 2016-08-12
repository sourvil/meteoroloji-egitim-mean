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

    //router.get('/status', function (req, res) {
    //    if (!req.isAuthenticated()) {
    //        return res.status(200).json({
    //            status: false
    //        });
    //    }
    //    res.status(200).json({
    //        status: true
    //    });
    //});

    return router;
}

