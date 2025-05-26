const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const dotenv = require('dotenv');

// Carrega variáveis de ambiente
dotenv.config();

// Importa rotas
const produtosRoutes = require('./routes/produtos');
const promocoesRoutes = require('./routes/promocoes');
const contatoRoutes = require('./routes/contato');
const buscaRoutes = require('./routes/busca');

// Inicializa o app Express
const app = express();

// Middlewares
app.use(helmet()); // Segurança
app.use(cors()); // Habilita CORS
app.use(morgan('dev')); // Logging
app.use(express.json()); // Parse de JSON
app.use(express.urlencoded({ extended: true })); // Parse de URL-encoded

// Rotas da API
app.use('/api/produtos', produtosRoutes);
app.use('/api/promocoes', promocoesRoutes);
app.use('/api/contato', contatoRoutes);
app.use('/api/busca', buscaRoutes);

// Rota de teste/saúde
app.get('/', (req, res) => {
  res.json({ message: 'API Elegance Moda funcionando!' });
});

// Middleware de tratamento de erros
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    message: 'Erro interno do servidor',
    error: process.env.NODE_ENV === 'production' ? {} : err
  });
});

// Porta do servidor
const PORT = process.env.PORT || 3001;

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

module.exports = app;

