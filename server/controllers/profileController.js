const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

const getProfile = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findById(userId);
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
    const id = req.params.id;
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).send("User not found");
    }

    const updateFields = {
      ...req.body,
    };

    // Update only the non-empty fields in the userModel
    Object.keys(updateFields).forEach((field) => {
      if (updateFields[field] !== "") {
        user[field] = updateFields[field];
      }
    });

    await user.save();
    const response = {
      message: "User updated successfully",
      data: user
    }
    
    res.status(200).json(response);
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: "Server Error" });
  }
};

module.exports = { getProfile, updateProfile };
