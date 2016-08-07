var request = require('sync-request');

var ruzgarGetir = function (city) {
    var url = "";
    if(city == 'ISTANBUL')
        url = "http://api.wunderground.com/api/b43ba424bd9be3a3/conditions/q/Istanbul.json";
    else
        url = "http://api.wunderground.com/api/b43ba424bd9be3a3/conditions/q/Ankara.json";

    var res = request('GET', url);
    var data = JSON.parse(res.getBody('utf-8'));
    return data.current_observation.wind_string; 
};

module.exports.ruzgarGetir = ruzgarGetir;