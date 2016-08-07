var express = require('express');
var router = express.Router();

var request = require('sync-request');
const env = require('env2')('./config.env');

var istanbulRuzgar = ruzgarGetir('ISTANBUL');
var ankaraRuzgar = ruzgarGetir('ANKARA');
var istanbulIcon = iconGetir('ISTANBUL');
var ankaraIcon = iconGetir('ANKARA');

function ruzgarGetir(city) {

    var url = "";
    if (city == 'ISTANBUL')
        url = process.env.istanbulWurl;
    else
        url = process.env.ankaraWurl;

    var res = request('GET', url);
    var data = JSON.parse(res.getBody('utf-8'));
    return data.current_observation.wind_string;
};

function iconGetir(city) {

    var url = "";
    if (city == 'ISTANBUL')
        url = process.env.istanbulWurl;
    else
        url = process.env.ankaraWurl;

    var res = request('GET', url);
    var data = JSON.parse(res.getBody('utf-8'));
    return data.current_observation.icon_url;
};



/* GET wind page. */
router.get('/', function (req, res, next) {
    res.render('wind', {
        city: 'ANKARA',
        cityWind: ankaraRuzgar,
        cityIcon: ankaraIcon,
        city2: 'ISTANBUL',
        cityWind2: istanbulRuzgar,
        cityIcon2: istanbulIcon
    });
});

module.exports = router;
