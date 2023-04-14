const { Router } = require('express');
const { signupUser, loginUser, userID } = require('../controllers/authController');

// const {signupUser, loginUser} = require('../controllers/authController');
// const { getProjects, updateProfile } = require('../controllers/profileController');

const router = Router();

// router.get("/:id", getProjects);

module.exports = router;