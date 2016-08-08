var mongoose = require('mongoose');
var User = mongoose.model('User');

var localStrategy = require('passport-local').Strategy;
var bCrypt = require('bcrypt-nodejs');

module.exports = function (passport) {

    // Passport session yonetimi : Serialize/Deserialize User
    passport.serializeUser(function (user, done) {
        return done(null, user._id);
    });

    passport.deserializeUser(function (id, done) {

        User.findById(id, function (err, user) {
            return done(err, user);
        });
    });

    passport.use('login', new localStrategy({
        passReqToCallback: true
    },
        function (req, username, password, done) {
            User.findOne({ 'username': username },
                function (err, user) {
                    if (err) {
                        console.log('login error: ' + err);
                        return done(err);
                    }

                    if (!user) {
                        console.log('login user not found!');
                        return done(null, false);
                    }
                    if (!isValidPassword(user, password)) {
                        console.log('login not valid password');
                        return done(null, false);
                    }

                    console.log('login başarılı. Kullanıcı: ' + user.username + '. Şifre: ' + user.password + '. ID:' + user._id);
                    return done(null, user);
                }
            );
        }
    ));

    passport.use('signup', new localStrategy({
        passReqToCallback: true // allows us to pass back the entire request to the callback
    },
        function (req, username, password, done) {
            User.findOne({ 'username': username },
                function (err, user) {
                    if (err) {
                        console.log('signup error: ' + err);
                        return done(err);
                    }
                    if (user) {
                        console.log('signup user already exists! : ' + username);
                        return done(null, false);
                    }
                    else {
                        var newUser = new User();
                        newUser.username = username;
                        newUser.password = createHash(password);

                        newUser.save(function (err) {
                            if (err) {
                                console.log('signup user not saved! Error: ' + err);
                                throw err;
                            }

                            console.log(newUser.username + ' kullanıcısı oluşturuldu!');
                            return done(null, newUser);
                        });

                    }
                }

            );
        })
    );

    var isValidPassword = function (user, password) {
        return bCrypt.compareSync(password, user.password);
    };
    // Hash şifresi üretme / bcrypt
    var createHash = function (password) {
        return bCrypt.hashSync(password, bCrypt.genSaltSync(10), null);
    };

};