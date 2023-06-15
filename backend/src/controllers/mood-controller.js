const moodModel = require('../models/mood-register-model');

const getAll = async (req, res) => {
  try {
    const mood = await moodModel.getAll();
    return res.status(200).json(mood);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const registerMood = async (req, res) => {
  try {
    const mood = await moodModel.registerMood(req.body);
    return res.status(201).json({ message: 'Mood registered successfully!' }).json(mood);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAll,
  registerMood,
};
