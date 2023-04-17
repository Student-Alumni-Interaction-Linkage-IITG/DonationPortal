const {Router} = require('express');

const {signupUser, loginUser} = require('../controllers/authController');
const {forget_password , reset_password} = require('../controllers/forgot_reset.js');


const router = Router();

router.post('/signup', signupUser);
router.post('/login', loginUser);
router.post('/forget-password',forget_password);
router.post('/reset-password',reset_password);
module.exports = router;