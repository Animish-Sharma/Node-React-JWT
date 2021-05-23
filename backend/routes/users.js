var express = require('express');
var router = express.Router();
const { login,register,update }  = require('../controllers/userController');
const { auth } = require('../middleware')

/* GET users listing. */
router.post('/login/', login);
router.post('/register/', register);
router.put('/update/:id/', auth ,update)

module.exports = router;
