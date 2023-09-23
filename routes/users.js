const router = require('express').Router();

const {
  getUserInfo,
  updateUser,
} = require('../controllers/users');

const {
  validationUpdateUser,
  validationGetUserInfo,
} = require('../middlewares/validation');

router.get('/me', validationGetUserInfo, getUserInfo);
router.patch('/me', validationUpdateUser, updateUser);

module.exports = router;
