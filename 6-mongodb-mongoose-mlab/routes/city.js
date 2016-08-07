var mongoose = require('mongoose');
var City = mongoose.model('City');

var express = require('express');
var router = express.Router();


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
            console.log(req.body.name + ' kaydedildi!');
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

module.exports = router;