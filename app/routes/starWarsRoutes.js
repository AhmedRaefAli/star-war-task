const express = require('express');

const starWarsControllers = require('../controllers/starWarsControllers');

const router = express.Router();



router.get('/', starWarsControllers.getAllData);

module.exports = router;
