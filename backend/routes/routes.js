const express =require('express');
const router = express.Router()

const register = require('../controler/register');

router.post('/register', register.register)


module.exports = router 