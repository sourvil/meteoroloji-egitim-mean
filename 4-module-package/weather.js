var request = require('request');
const env = require('env2')('./config.env');

function ankaraSicaklikGoster() {
    var url = process.env.ankaraWurl;
    request(url, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            data = JSON.parse(body);
            ankaraSicaklik = data.current_observation.temp_c;
            console.log('ANKARA Sıcaklık: ' + ankaraSicaklik);
        }
    });
};

function istanbulSicaklikGoster() {
    var url = process.env.istanbulWurl;
    request(url, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            data = JSON.parse(body);
            istanbulSicaklik = data.current_observation.temp_c;
            console.log('ISTANBUL Sıcaklık: ' + istanbulSicaklik);
        }
    });
};


module.exports = {
    ankaraSicaklikGoster: function () {
        return ankaraSicaklikGoster();
    },
    istanbulSicaklikGoster: function () {
        return istanbulSicaklikGoster();
    }
};

