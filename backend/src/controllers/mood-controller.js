const moodModel = require('../models/mood-model');

const getAll = async (req, res) => {
  const mood = await moodModel.getAll();
  return res.status(200).json(mood);
};

module.exports = {
  getAll,
};
