const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Controlador para contato
const contatoController = {
  // Enviar formulário de contato
  async enviarContato(req, res) {
    const { nome, sobrenome, email, telefone, whatsapp, mensagem } = req.body;
    
    // Validação básica
    if (!nome || !email || !mensagem) {
      return res.status(400).json({ 
        error: 'Dados incompletos. Nome, email e mensagem são obrigatórios.' 
      });
    }
    
    try {
      // Salvar contato no banco de dados
      const novoContato = await prisma.contato.create({
        data: {
          nome,
          sobrenome: sobrenome || '',
          email,
          telefone: telefone || '',
          whatsapp: whatsapp || '',
          mensagem
        }
      });
      
      res.status(201).json({ 
        message: 'Mensagem enviada com sucesso!',
        contato: novoContato
      });
    } catch (error) {
      console.error('Erro ao salvar contato:', error);
      res.status(500).json({ error: 'Erro ao processar formulário de contato' });
    }
  }
};

module.exports = contatoController;
