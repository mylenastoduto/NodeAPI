const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Rotas básicas
router.get('/', userController.getWelcome);
router.get('/saudacao/:nome', userController.getGreeting);
router.post('/info', userController.postInfo);

// Novas rotas de Banco de Dados
router.get('/users', userController.getUsers);
router.post('/users', userController.createUser);

module.exports = router;
