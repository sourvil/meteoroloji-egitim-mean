var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../app');
var should = chai.should();

chai.use(chaiHttp);
chai.use(require('chai-passport-strategy'));

const env = require('env2')('./config.env');

describe('Weather', function () {
    it('should list ALL weather info', function (done) {
        chai.request(server)
            .get('/weather')
            .end(function (err, res) {
                res.should.have.status(200);
                res.should.be.json;
                res.body.should.be.a('array');
                done();
            });
    });

    it('should get ONLY default weather info', function (done) {
        var idWeather = process.env.defaultWeatherId;
        chai.request(server)
            .get('/weather/' + idWeather)
            .end(function (err, res) {
                res.should.have.status(200);
                res.should.be.json;
                res.body.description.should.equal(process.env.defaultWeatherDescription);
                done();
            });
    });
});
