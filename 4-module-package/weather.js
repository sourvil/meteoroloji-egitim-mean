var request = require('request');

function ankaraSicaklikGoster() {
    var url = "http://api.wunderground.com/api/b43ba424bd9be3a3/conditions/q/Ankara.json";
    request(url, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            data = JSON.parse(body);
            ankaraSicaklik = data.current_observation.temp_c;
            console.log('Ankara Sıcaklık: ' + ankaraSicaklik);
        }
    });
};

function istanbulSicaklikGoster() {
    var url = "http://api.wunderground.com/api/b43ba424bd9be3a3/conditions/q/Istanbul.json";
    request(url, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            data = JSON.parse(body);
            istanbulSicaklik = data.current_observation.temp_c;
            console.log('Istanbul Sıcaklık: ' + istanbulSicaklik);
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

