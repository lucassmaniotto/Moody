const userModel = require('../models/user-model');

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.loginUser(email, password);
    return res.status(200).json(user);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
}

const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await userModel.getUserById(id);
    if (!user) {
      return res.status(404).json({ message: 'User not found!' });
    }
    return res.status(200).json(user);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
}

const registerUser = async (req, res) => {
  try {
    const user = await userModel.registerUser(req.body);
    return res
      .status(201)
      .json({ message: 'User registered successfully!' })
      .json(user);
  } catch (error) {
    if (error.message.includes('duplicate key')) {
      return res.status(409).json({ message: error.message });
    }
    return res.status(500).json({ message: error.message });
  }
}

module.exports = {
  loginUser,
  getUserById,
  registerUser,
};
