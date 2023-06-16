const moodModel = require('../models/moods-model');

const getAll = async (req, res) => {
  try {
    const mood = await moodModel.getAll();
    return res.status(200).json(mood);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAll,
};
