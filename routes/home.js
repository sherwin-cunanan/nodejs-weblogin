// Modules
const express = require('express');
const router = express.Router();

// Controllers
const homeController = require('../controllers/home')

// Receives the index page
router.use('/',homeController.showHome);

module.exports = router;