const db = require('../config/database');

exports.getWelcome = (req, res) => {
  res.json({ message: 'Bem-vindo à API de estudos (agora com PostgreSQL)!' });
};

// Listar usuários do banco
exports.getUsers = async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM users ORDER BY id ASC');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Criar novo usuário no banco
exports.createUser = async (req, res) => {
  const { nome, email } = req.body;
  try {
    const result = await db.query(
      'INSERT INTO users (nome, email) VALUES ($1, $2) RETURNING *',
      [nome, email]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getGreeting = (req, res) => {
  const { nome } = req.params;
  res.json({ message: `Olá, ${nome}!` });
};

exports.postInfo = (req, res) => {
  const data = req.body;
  res.json({
    received: data,
    status: 'success',
    context: 'Database Integration'
  });
};
