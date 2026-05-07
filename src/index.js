const express = require('express');
const app = express();
const port = 3000;
const userRoutes = require('./routes/userRoutes');

// Middleware para processar JSON
app.use(express.json());

// Usando as rotas modulares
// Agora todas as rotas definidas em userRoutes estarão prefixadas (ou não, dependendo da sua escolha)
app.use('/', userRoutes);

app.listen(port, () => {
  console.log(`Servidor rodando de forma modular em http://localhost:${port}`);
});
