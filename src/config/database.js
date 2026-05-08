const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// Função para testar a conexão e criar a tabela inicial
const initDb = async () => {
  try {
    const client = await pool.connect();
    console.log('✅ Conectado ao PostgreSQL com sucesso!');
    
    // Criando uma tabela de exemplo para estudos
    await client.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        nome VARCHAR(100) NOT NULL,
        email VARCHAR(100) UNIQUE NOT NULL,
        criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);
    console.log('✅ Tabela "users" verificada/criada.');
    
    client.release();
  } catch (err) {
    console.error('❌ Erro ao conectar ao banco de dados:', err.message);
  }
};

module.exports = {
  query: (text, params) => pool.query(text, params),
  initDb,
};
