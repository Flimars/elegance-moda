const express = require('express');
const router = express.Router();
const promocoesController = require('../controllers/promocoesController');

// Rotas para promoções
router.get('/', promocoesController.listarPromocoes);

module.exports = router;

