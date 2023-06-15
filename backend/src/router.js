const express = require('express');
const moodController = require('./controllers/mood-register-controller');
const moodMiddleware = require('./middlewares/mood-register-middleware');

const router = express.Router();

router.get('/mood', moodController.getAll);
router.post('/mood', moodMiddleware.validateBody, moodController.registerMood);

module.exports = router;
