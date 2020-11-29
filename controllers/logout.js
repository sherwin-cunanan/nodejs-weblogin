const config = require('config');
console.log('logout');
exports.resetSession = (req, res, next) => {
    
    res.render('home',homeParam);
}