const express = require('express');
const router = express.Router();
const contatoController = require('../controllers/contatoController');

// Rotas para contato
router.post('/', contatoController.enviarContato);

module.exports = router;
