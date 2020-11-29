const config = require('config');

var loginParam = JSON.parse(JSON.stringify(config.get('loginParams')));

exports.showLogin = (req, res, next) => {
    res.render('login',loginParam)
}