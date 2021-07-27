const router = require('express').Router();
const { conversationController } = require('../Controllers');


router.post('/', conversationController.newConversation);
router.get('/:userId', conversationController.getConversation);


module.exports = router;