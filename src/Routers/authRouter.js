const router = require('express').Router();
const { authController } = require('../Controllers');


router.post('/register', authController.register);
router.post('/login', authController.login);


module.exports = router;