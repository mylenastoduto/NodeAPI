const express = require('express');
const app = express();
require('dotenv').config();
const db = require('./config/database');
const userRoutes = require('./routes/userRoutes');

const port = process.env.PORT || 3000;

// Middleware para processar JSON
app.use(express.json());

// Inicializa o banco de dados
db.initDb();

// Usando as rotas modulares
app.use('/', userRoutes);

app.listen(port, () => {
  console.log(`Servidor rodando de forma modular em http://localhost:${port}`);
});
