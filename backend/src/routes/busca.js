const express = require('express');
const router = express.Router();
const buscaController = require('../controllers/buscaController');

// Rotas para busca
router.get('/', buscaController.buscarProdutos);

module.exports = router;
