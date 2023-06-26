const express = require('express');
const moodRecordController = require('./controllers/mood-record-controller');
const moodRecordMiddleware = require('./middlewares/mood-record-middleware');
const moodsController = require('./controllers/moods-controller');
const userController = require('./controllers/user-controller');
const userMiddleware = require('./middlewares/users-middleware');

const router = express.Router();

router.get('/mood/last-id', moodRecordController.getLastId);
router.get('/mood/:id', moodRecordController.getMoodById);
router.post('/mood', moodRecordMiddleware.validateBody, moodRecordController.registerMood);
router.delete('/mood/:id', moodRecordController.deleteMood);
router.put('/mood/:id', moodRecordMiddleware.validateBody, moodRecordController.updateMood);

router.get('/moods', moodsController.getAll);

router.get('/user/:id', userController.getUserById);
router.post('/user/login', userController.loginUser);
router.post('/user/register', userMiddleware.validateBody, userController.registerUser);

module.exports = router;
