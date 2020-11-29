const config = require('config');

var homeParam = JSON.parse(JSON.stringify(config.get('homeParams')));

exports.showHome = (req, res, next) => {
    res.render('home',homeParam)
}