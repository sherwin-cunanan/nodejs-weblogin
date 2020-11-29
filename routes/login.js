// Modules
const express = require('express');
const router = express.Router();

// Controllers
const loginController = require('../controllers/login')

// Receives the index page
router.use('/',loginController.showLogin)

module.exports = router;