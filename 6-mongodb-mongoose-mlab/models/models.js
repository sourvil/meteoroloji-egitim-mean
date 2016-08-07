var mongoose = require('mongoose');

var citySchema = new mongoose.Schema({
    name: String,
    code: Number
});

var weatherSchema = new mongoose.Schema({
    temperature: Number,
    description: String,
    city: {type: mongoose.Schema.ObjectId, ref: 'City'}
});

mongoose.model('City', citySchema);
mongoose.model('Weather', weatherSchema);
