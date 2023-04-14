const { Router } = require('express');
const { signupUser, loginUser, userID } = require('../controllers/authController');

// const {signupUser, loginUser} = require('../controllers/authController');
const { getProfile, updateProfile } = require('../controllers/profileController');

const router = Router();

// try {
router.get("/:id", getProfile);
router.patch("/:id", updateProfile);

module.exports = router;