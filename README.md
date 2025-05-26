# Arquitetura do Projeto Elegance Moda

## Visão Geral

Este documento descreve a arquitetura e estrutura de módulos do projeto Elegance Moda, uma loja online de vestuário e acessórios. O projeto segue uma arquitetura full-stack moderna, utilizando Next.js para o frontend, Node.js com Express para o backend, e PostgreSQL com Prisma como ORM para o banco de dados.

## Estrutura de Diretórios

```
elegance-moda/
├── docs/                    # Documentação do projeto
├── frontend/                # Aplicação Next.js
│   ├── public/              # Arquivos estáticos (imagens, fontes, etc.)
│   ├── src/                 # Código fonte do frontend
│   │   ├── app/             # Páginas da aplicação (Next.js App Router)
│   │   │   ├── page.tsx     # Página Home
│   │   │   ├── sobre/       # Página Sobre
│   │   │   ├── produtos/    # Página Produtos
│   │   │   ├── promocoes/   # Página Promoções
│   │   │   └── contato/     # Página Contato
│   │   ├── components/      # Componentes reutilizáveis
│   │   │   ├── ui/          # Componentes de UI básicos
│   │   │   ├── layout/      # Componentes de layout (Header, Footer)
│   │   │   ├── carousel/    # Componente de carrossel
│   │   │   └── forms/       # Componentes de formulários
│   │   ├── hooks/           # Custom hooks
│   │   ├── lib/             # Utilitários e configurações
│   │   ├── services/        # Serviços para comunicação com a API
│   │   └── styles/          # Estilos globais e variáveis
│   ├── tailwind.config.js   # Configuração do Tailwind CSS
│   └── package.json         # Dependências do frontend
├── backend/                 # Aplicação Node.js/Express
│   ├── src/                 # Código fonte do backend
│   │   ├── controllers/     # Controladores da API
│   │   ├── routes/          # Rotas da API
│   │   ├── middlewares/     # Middlewares
│   │   ├── services/        # Serviços de negócio
│   │   ├── utils/           # Utilitários
│   │   └── app.js           # Configuração do Express
│   ├── prisma/              # Configuração do Prisma
│   │   ├── schema.prisma    # Schema do banco de dados
│   │   └── migrations/      # Migrações do banco de dados
│   └── package.json         # Dependências do backend
└── README.md                # Documentação principal do projeto
```

## Arquitetura Frontend (Next.js)

### Páginas

1. **Home (/)**: 
   - Carrossel principal com 4 sliders
   - Seções de destaque de produtos
   - Chamadas para ação

2. **Sobre (/sobre)**:
   - História da loja e seus sócios
   - Imagem atual da empresa
   - Valores e missão

3. **Produtos (/produtos)**:
   - Listagem de produtos com fotos, descrições e preços
   - Filtros por categoria
   - Botão flutuante de WhatsApp

4. **Promoções (/promocoes)**:
   - Carrossel com 4 sliders de produtos em promoção
   - Preços promocionais em destaque
   - Preços originais hachurados
   - Botão flutuante de WhatsApp

5. **Contato (/contato)**:
   - Texto introdutório
   - Formulário de contato com validação
   - Informações adicionais de contato

### Componentes Principais

1. **Header**:
   - Logo centralizado
   - Menu de navegação
   - Campo de busca
   - Ícones de redes sociais
   - Login/Cadastro
   - Carrinho de compras

2. **Footer**:
   - Endereço, CEP, telefone e email
   - Links para redes sociais
   - Links para páginas principais
   - Informações legais

3. **Carrossel**:
   - Componente reutilizável para diferentes páginas
   - Controles de navegação
   - Suporte a diferentes tipos de conteúdo

4. **Botão WhatsApp**:
   - Componente flutuante fixo
   - Link direto para contato via WhatsApp

5. **Card de Produto**:
   - Imagem do produto
   - Título e descrição
   - Preço (normal ou promocional)
   - Botão de ação

## Arquitetura Backend (Node.js/Express)

### API Endpoints

1. **Produtos**:
   - `GET /api/produtos`: Listar todos os produtos
   - `GET /api/produtos/:id`: Obter detalhes de um produto
   - `GET /api/produtos/categoria/:categoria`: Filtrar produtos por categoria

2. **Promoções**:
   - `GET /api/promocoes`: Listar produtos em promoção

3. **Contato**:
   - `POST /api/contato`: Enviar formulário de contato

4. **Busca**:
   - `GET /api/busca?q=termo`: Buscar produtos por termo

### Middlewares

1. **Autenticação**: Para futuras áreas administrativas
2. **Validação**: Validação de dados de entrada
3. **Logging**: Registro de atividades e erros
4. **CORS**: Configuração de Cross-Origin Resource Sharing

## Banco de Dados (PostgreSQL com Prisma)

### Modelos Principais

1. **Produto**:
   ```prisma
   model Produto {
     id          Int      @id @default(autoincrement())
     nome        String
     descricao   String
     preco       Decimal
     imagem      String
     categoriaId Int
     promocao    Boolean  @default(false)
     precoPromo  Decimal?
     destaque    Boolean  @default(false)
     createdAt   DateTime @default(now())
     updatedAt   DateTime @updatedAt
     categoria   Categoria @relation(fields: [categoriaId], references: [id])
   }
   ```

2. **Categoria**:
   ```prisma
   model Categoria {
     id       Int       @id @default(autoincrement())
     nome     String
     produtos Produto[]
   }
   ```

3. **Contato**:
   ```prisma
   model Contato {
     id         Int      @id @default(autoincrement())
     nome       String
     sobrenome  String
     email      String
     telefone   String
     whatsapp   String
     mensagem   String
     createdAt  DateTime @default(now())
   }
   ```

## Integração Frontend-Backend

- O frontend se comunicará com o backend através de chamadas API RESTful
- Utilizaremos o cliente HTTP Axios para realizar as requisições
- As respostas serão em formato JSON
- Implementaremos tratamento de erros e estados de carregamento

## Estilo e Design

Baseado na imagem de referência, o design seguirá estas características:

- Paleta de cores: tons suaves de rosa/salmão, branco, preto
- Tipografia elegante e moderna
- Layout clean e minimalista
- Destaque para imagens de produtos
- Elementos visuais femininos e sofisticados
- Design responsivo para todas as telas

## Tecnologias Adicionais

1. **Tailwind CSS**: Para estilização rápida e consistente
2. **React Icons**: Para ícones de redes sociais e interface
3. **React Hook Form**: Para gerenciamento de formulários
4. **Zod**: Para validação de dados
5. **SWR**: Para gerenciamento de estado e cache de dados
6. **Framer Motion**: Para animações suaves
7. **React Slick**: Para implementação de carrosséis

## Considerações de Segurança

1. Validação de dados em ambos frontend e backend
2. Proteção contra ataques comuns (XSS, CSRF, SQL Injection)
3. Sanitização de inputs de usuário
4. Uso de HTTPS para todas as comunicações
5. Implementação de rate limiting para APIs

## Estratégia de Implantação

1. Desenvolvimento local com ambiente integrado
2. Testes unitários e de integração
3. Implantação do banco de dados PostgreSQL
4. Implantação do backend em serviço de hospedagem Node.js
5. Implantação do frontend em serviço de hospedagem Next.js
6. Configuração de domínio e SSL
