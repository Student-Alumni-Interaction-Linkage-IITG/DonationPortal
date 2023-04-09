const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

const getProfile = async (req, res) => {
  try {
    const userId = req.params.id;
    console.log(userId);
    const user = await User.findById(userId);
    // console.log(user);
    if (!user) {
      return res.status(404).json({ message: "User data not found" });
    }
    return res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "An error occurred" });
  }
};

const updateProfile = async (req, res) => {
  try {
    // Get user ID from URL parameter
    const userId = req.params.id;

    // Find the user by ID and update the data
    const user = await User.findByIdAndUpdate(userId, req.body, { new: true });

    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }

    // Return the updated user data
    res.send(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "An error occurred" });
  }
};

module.exports = { getProfile, updateProfile };
