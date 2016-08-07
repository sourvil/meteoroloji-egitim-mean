var weather = require('./weather');
weather.ankaraSicaklikGoster();
weather.istanbulSicaklikGoster();

var wind = require('./wind');
var ruzgar = wind.ruzgarGetir('ISTANBUL');
console.log('Ruzgar:' + ruzgar);
