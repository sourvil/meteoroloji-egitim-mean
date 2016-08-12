var mongoose = require('mongoose');
var City = mongoose.model('City');

var express = require('express');
var router = express.Router();

//Used for routes that must be authenticated.
function isAuthenticated(req, res, next) {

    // GET ile veri çekebilir
    if (req.method === "GET") {
        return next();
    }

    console.log('auth?' + req.isAuthenticated());

    if (req.isAuthenticated()) {
        return next();
    }

    // Authenticate olmamışsa anasayfaya yönlendir
    return res.redirect('/auth/failure');
};

//Register the authentication middleware
router.use('/', isAuthenticated);

router.route('/')
    .post(function (req, res) {


        var city = new City();
        city.name = req.body.name;
        city.code = req.body.code;

        city.save(function (err, city) {
            if (err) {
                console.log('city post error:' + err);
                return res.send(500, err);
            }
            console.log(req.body.name + ' kaydedildi');
            return res.json(city);
        });

    })

    .get(function (req, res) {
        City.find(function (err, cities) {
            if (err)
                return res.send(500, err);
            return res.send(cities);
        });
    });


router.route('/:id')
    .put(function (req, res) {
        City.findById(req.params.id, function (err, city) {
            if (err)
                return res.send(err);

            city.name = req.body.name;
            city.code = req.body.code;

            city.save(function (err, city) {
                if (err)
                    res.send(err);

                return res.json(city);
            });

        });
    })
    .get(function (req, res) {
        City.findById(req.params.id, function (err, city) {
            if (err)
                return res.send(err);
            return res.json(city);
        });
    })
    .delete(function (req, res) {
        City.findById(req.params.id, function (err, city) {
            if (err)
                return res.send(err);
            city.remove(function (err) {
                if (err)
                    return res.send(err);
                return res.json("Deleted!");
            });
        });
    })
    ;


module.exports = router;