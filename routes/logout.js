// Modules
const express = require('express');
const router = express.Router();

// Controllers
const logoutController = require('../controllers/logout');

// Receives the index page
//router.use('/logout',logoutController.resetSession);

module.exports = router;