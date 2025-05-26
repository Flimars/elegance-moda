const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Controlador para busca
const buscaController = {
  // Buscar produtos por termo
  async buscarProdutos(req, res) {
    const { q } = req.query;
    
    if (!q) {
      return res.status(400).json({ error: 'Termo de busca não fornecido' });
    }
    
    try {
      const resultados = await prisma.produto.findMany({
        where: {
          OR: [
            { nome: { contains: q, mode: 'insensitive' } },
            { descricao: { contains: q, mode: 'insensitive' } }
          ]
        },
        include: {
          categoria: true,
        },
      });
      
      res.json(resultados);
    } catch (error) {
      console.error('Erro ao buscar produtos:', error);
      res.status(500).json({ error: 'Erro ao realizar busca' });
    }
  }
};

module.exports = buscaController;
