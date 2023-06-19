const express = require('express');
const moodRegisterController = require('./controllers/mood-register-controller');
const moodMiddleware = require('./middlewares/mood-register-middleware');
const moodsController = require('./controllers/moods-controller');

const router = express.Router();

router.get('/mood', moodRegisterController.getAll);
router.get('/mood/last-id', moodRegisterController.getLastId);
router.post('/mood', moodMiddleware.validateBody, moodRegisterController.registerMood);
router.delete('/mood/:id', moodRegisterController.deleteMood);
router.put('/mood/:id', moodMiddleware.validateBody, moodRegisterController.updateMood);

router.get('/moods', moodsController.getAll);

module.exports = router;
