const express = require('express');
const requireAuth = require('../middleware/requireAuth')
const indexRoutes = require('../routes/index')
const profileRoutes = require('../routes/profileRoutes');
const sendMail = require('../controllers/sendemail');



const router = express.Router();

// require auth for all workout routes
router.use(requireAuth)

//protected routes
router.use('',indexRoutes.ProjectCreationRoute);
router.use('',indexRoutes.gsProjectRoute);
router.use('',indexRoutes.ongoingProjectsRoute);
router.use('/profile', profileRoutes);
router.get('/sendmail',sendMail);


module.exports = router