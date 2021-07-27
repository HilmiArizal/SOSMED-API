const router = require('express').Router();
const { messageController } = require('../Controllers');


router.post('/', messageController.addMessage);
router.get('/:conversationId', messageController.getMessage);


module.exports = router;