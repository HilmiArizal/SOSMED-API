const router = require('express').Router();
const { profileController } = require('../Controllers');


router.get('/', profileController.getProfile);
router.get('/getProfileUserById', profileController.getProfileByUserId);
router.post('/addProfile', profileController.addProfile);
router.put('/editProfile', profileController.editProfile);


module.exports = router;