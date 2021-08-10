const router = require('express').Router();
const { userController } = require('../Controllers');


router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUserById);
router.get('/userPost/:userId', userController.getUserPostById);


module.exports = router;