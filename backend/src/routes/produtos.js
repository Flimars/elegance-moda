const express = require('express');
const router = express.Router();
const produtosController = require('../controllers/produtosController');

// Rotas para produtos
router.get('/', produtosController.listarProdutos);
router.get('/:id', produtosController.obterProduto);
router.get('/categoria/:categoria', produtosController.listarPorCategoria);

module.exports = router;
