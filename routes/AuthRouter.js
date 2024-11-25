// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const usersController = require('../controllers/AuthController');

router.post('/signup', usersController.signup);
router.post('/login', usersController.login);
router.get('/user', usersController.getCurrentUser);
router.post('/request-otp', usersController.requestOTP);
router.post('/verify-otp', usersController.verifyOTP);
router.put('/update-password', usersController.updatePassword);


module.exports = router;
