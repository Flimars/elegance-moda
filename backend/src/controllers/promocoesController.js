const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Controlador para promoções
const promocoesController = {
  // Listar todos os produtos em promoção
  async listarPromocoes(req, res) {
    try {
      const promocoes = await prisma.produto.findMany({
        where: {
          promocao: true,
        },
        include: {
          categoria: true,
        },
      });
      res.json(promocoes);
    } catch (error) {
      console.error('Erro ao listar promoções:', error);
      res.status(500).json({ error: 'Erro ao buscar promoções' });
    }
  }
};

module.exports = promocoesController;
