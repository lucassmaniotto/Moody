const moodModel = require('../models/mood-record-model');

const getAll = async (req, res) => {
  try {
    const mood = await moodModel.getAll();
    return res.status(200).json(mood);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getLastId = async (req, res) => {
  try {
    const mood = await moodModel.getLastId();
    return res.status(200).json(mood);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const registerMood = async (req, res) => {
  try {
    const mood = await moodModel.registerMood(req.body);
    return res
      .status(201)
      .json({ message: 'Mood registered successfully!' })
      .json(mood);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const deleteMood = async (req, res) => {
  try {
    const { id } = req.params;
    await moodModel.deleteMood(id);
    return res.status(204).end();
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const updateMood = async (req, res) => {
  try {
    const { id } = req.params;
    const mood = await moodModel.updateMood(id, req.body);
    return res.status(204).json(mood);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAll,
  getLastId,
  registerMood,
  deleteMood,
  updateMood,
};
