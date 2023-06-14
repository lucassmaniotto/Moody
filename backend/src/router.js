const express = require('express');
const moodController = require('./controllers/mood-controller');

const router = express.Router();

router.get('/mood', moodController.getAll);

module.exports = router;
