const express = require('express');
const moodController = require('./controllers/mood-controller');

const router = express.Router();

router.get('/mood', moodController.getAll);
router.post('/mood', moodController.registerMood);

module.exports = router;
