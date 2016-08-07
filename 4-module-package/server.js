var weather = require('./weather');
weather.ankaraSicaklikGoster();
weather.istanbulSicaklikGoster();

var wind = require('./wind');
var city = 'ISTANBUL';
var ruzgar = wind.ruzgarGetir(city);
console.log(city + ' Ruzgar:' + ruzgar);

