const db = require('../config/database');

exports.getWelcome = (req, res) => {
  res.json({ message: 'API de Estudos: Gerenciamento de Usuários com Dados Completos' });
};

// Listar todos os usuários
exports.getUsers = async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM users ORDER BY id ASC');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Criar novo usuário com os novos campos
exports.createUser = async (req, res) => {
  const { nome, email, data_nascimento, telefone } = req.body;
  
  if (!nome || !email) {
    return res.status(400).json({ error: 'Nome e Email são obrigatórios.' });
  }

  try {
    const result = await db.query(
      'INSERT INTO users (nome, email, data_nascimento, telefone) VALUES ($1, $2, $3, $4) RETURNING *',
      [nome, email, data_nascimento, telefone]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    if (err.code === '23505') { // Erro de chave duplicada (email único)
      return res.status(400).json({ error: 'Este e-mail já está cadastrado.' });
    }
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
    context: 'Updated User Schema'
  });
};
