const {Router} = require('express');

const {signupUser, loginUser, googleLogin} = require('../controllers/authController');

const router = Router();

router.post('/signup', signupUser);
router.post('/login', loginUser);
router.post('/googleLogin', googleLogin);

module.exports = router;