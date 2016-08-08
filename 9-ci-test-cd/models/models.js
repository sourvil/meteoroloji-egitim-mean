var mongoose = require('mongoose');

var citySchema = new mongoose.Schema({
    name: String,
    code: Number
});

var weatherSchema = new mongoose.Schema({
    temperature: Number,
    description: String,
    city: { type: mongoose.Schema.ObjectId, ref: 'City' }
});

var userSchema = new mongoose.Schema({
    username: String,
    password: String,
    createdAt: { type: Date, default: Date.now }
});

mongoose.model('City', citySchema);
mongoose.model('Weather', weatherSchema);
mongoose.model('User', userSchema);