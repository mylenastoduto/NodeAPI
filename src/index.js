const express = require('express');
const app = express();
const port = 3000;

// Middleware para processar JSON
app.use(express.json());

// Endpoint básico: GET /
app.get('/', (req, res) => {
  res.json({ message: 'Bem-vindo à API de estudos!' });
});

app.get('/oi', (req, res) => {
  res.json({ message: 'olá, tudo bem?' });
});

// Endpoint com parâmetro: GET /saudacao/:nome
app.get('/saudacao/:nome', (req, res) => {
  const { nome } = req.params;
  res.json({ message: `Olá, ${nome}!` });
});

// Endpoint POST para receber dados: POST /info
app.post('/info', (req, res) => {
  const data = req.body;
  res.json({
    received: data,
    status: 'success'
  });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
