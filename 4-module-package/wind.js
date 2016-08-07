var request = require('sync-request');
const env = require('env2')('./config.env');

var ruzgarGetir = function (city) {
    var url = "";
    if(city == 'ISTANBUL')
        url = process.env.istanbulWurl;
    else
        url = process.env.ankaraWurl;

    var res = request('GET', url);
    var data = JSON.parse(res.getBody('utf-8'));
    return data.current_observation.wind_string; 
};

module.exports.ruzgarGetir = ruzgarGetir;