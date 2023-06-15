const express = require('express');
const moodController = require('./controllers/mood-register-controller');
const moodMiddleware = require('./middlewares/mood-register-middleware');

const router = express.Router();

router.get('/mood', moodController.getAll);
router.post('/mood', moodMiddleware.validateBody, moodController.registerMood);
router.delete('/mood/:id', moodController.deleteMood);
router.put('/mood/:id', moodMiddleware.validateBody, moodController.updateMood);

module.exports = router;
