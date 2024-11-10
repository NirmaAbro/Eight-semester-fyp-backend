const { signup, login,getUserInfo } = require('../controllers/AuthController');
const { signupValidation, loginValidation } = require('../middlewares/AuthValidation');
const router = require('express').Router();
const {authenticate } =require("../middlewares/Auth");

router.post('/login', loginValidation, login);
router.post('/signup', signupValidation, signup);
router.get("/user", authenticate, getUserInfo); // New route for getting user info


module.exports = router;