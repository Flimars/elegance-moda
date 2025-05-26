const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Controlador para produtos
const produtosController = {
  // Listar todos os produtos
  async listarProdutos(req, res) {
    try {
      const produtos = await prisma.produto.findMany({
        include: {
          categoria: true,
        },
      });
      res.json(produtos);
    } catch (error) {
      console.error('Erro ao listar produtos:', error);
      res.status(500).json({ error: 'Erro ao buscar produtos' });
    }
  },

  // Obter um produto específico por ID
  async obterProduto(req, res) {
    const { id } = req.params;
    
    try {
      const produto = await prisma.produto.findUnique({
        where: { id: Number(id) },
        include: {
          categoria: true,
        },
      });
      
      if (!produto) {
        return res.status(404).json({ error: 'Produto não encontrado' });
      }
      
      res.json(produto);
    } catch (error) {
      console.error('Erro ao buscar produto:', error);
      res.status(500).json({ error: 'Erro ao buscar produto' });
    }
  },

  // Listar produtos por categoria
  async listarPorCategoria(req, res) {
    const { categoria } = req.params;
    
    try {
      // Primeiro, encontrar a categoria pelo nome
      const categoriaEncontrada = await prisma.categoria.findFirst({
        where: { nome: categoria },
      });
      
      if (!categoriaEncontrada) {
        return res.status(404).json({ error: 'Categoria não encontrada' });
      }
      
      // Depois, buscar produtos dessa categoria
      const produtos = await prisma.produto.findMany({
        where: { categoriaId: categoriaEncontrada.id },
        include: {
          categoria: true,
        },
      });
      
      res.json(produtos);
    } catch (error) {
      console.error('Erro ao listar produtos por categoria:', error);
      res.status(500).json({ error: 'Erro ao buscar produtos por categoria' });
    }
  }
};

module.exports = produtosController;
