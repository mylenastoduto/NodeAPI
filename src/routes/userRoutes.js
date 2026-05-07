const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Definindo as rotas e vinculando aos controllers
router.get('/', userController.getWelcome);
router.get('/saudacao/:nome', userController.getGreeting);
router.post('/info', userController.postInfo);

module.exports = router;
