const router = require('express').Router();
const { postController } = require('../Controllers');


router.post('/addPost', postController.addPost);
router.get('/', postController.getPost);
router.delete('/deletePost', postController.deletePost);


module.exports = router;