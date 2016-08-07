var mongoose = require('mongoose');
var Weather = mongoose.model('Weather');

var express = require('express');
var router = express.Router();


router.route('/')
    .post(function (req, res) {


        var weather = new Weather();
        weather.temperature = req.body.temperature;
        weather.description = req.body.description;
        weather.city = req.body.city;

        weather.save(function (err, weather) {
            if (err) {
                console.log('weather post error:' + err);
                return res.send(500, err);
            }
            console.log(req.body.city + ' kaydedildi');
            return res.json(weather);
        });

    })

    .get(function (req, res) {
        Weather.find(function (err, weathers) {
            if (err)
                return res.send(500, err);
            Weather.populate(weathers, { path: 'city' }, function (err, weathers) {
                return res.send(weathers);
            });
        });
    });


router.route('/:id')
    .put(function (req, res) {
        Weather.findById(req.params.id, function (err, weather) {
            if (err)
                return res.send(err);

            weather.temperature = req.body.temperature;
            weather.description = req.body.description;
            weather.city = req.body.city;

            weather.save(function (err, weather) {
                if (err)
                    res.send(err);

                return res.json(weather);
            });

        });
    })
    .get(function (req, res) {
        Weather.findById(req.params.id, function (err, weather) {
            if (err)
                return res.send(err);
            return res.json(weather);
        });
    })
    .delete(function (req, res) {
        Weather.findById(req.params.id, function (err, weather) {
            if (err)
                return res.send(err);
            weather.remove(function (err) {
                if (err)
                    return res.send(err);
                return res.json("Deleted!");
            });
        });
    })
    ;

router.route('/city/:id')
    .get(function (req, res) {
        Weather.find({ city: req.params.id }).sort({ temperature: 1 }).exec(function (err, weathers) {
            if (err)
                return res.send(err);
            Weather.populate(weathers, { path: 'city' }, function (err, weathers) {
                return res.send(weathers);
            });
        });
    })


module.exports = router;