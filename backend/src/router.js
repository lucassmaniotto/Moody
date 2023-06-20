const express = require('express');
const moodRecordController = require('./controllers/mood-record-controller');
const moodMiddleware = require('./middlewares/mood-record-middleware');
const moodsController = require('./controllers/moods-controller');

const router = express.Router();

router.get('/mood', moodRecordController.getAll);
router.get('/mood/last-id', moodRecordController.getLastId);
router.post('/mood', moodMiddleware.validateBody, moodRecordController.registerMood);
router.delete('/mood/:id', moodRecordController.deleteMood);
router.put('/mood/:id', moodMiddleware.validateBody, moodRecordController.updateMood);

router.get('/moods', moodsController.getAll);

module.exports = router;
