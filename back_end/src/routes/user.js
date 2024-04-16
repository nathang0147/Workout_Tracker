const express = require('express');
const User = require('..//app/controller/userController');

const router = express.Router();

//Signup router
router.get('/signup',User.signup_get);
router.post('/signup',User.signup_post);

//login router
router.get('/login',User.login_get);
router.post('/login',User.login_post);

//logout router
router.get('/logout',User.logout);


module.exports = router;