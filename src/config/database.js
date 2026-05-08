const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

const initDb = async () => {
  try {
    const client = await pool.connect();
    console.log('✅ Conectado ao PostgreSQL!');

    // Criando/Atualizando a tabela com os novos campos
    await client.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        nome VARCHAR(100) NOT NULL,
        email VARCHAR(100) UNIQUE NOT NULL,
        data_nascimento DATE,
        telefone VARCHAR(20),
        criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);

    // Garantir que as colunas novas existam caso a tabela já tenha sido criada antes
    await client.query('ALTER TABLE users ADD COLUMN IF NOT EXISTS data_nascimento DATE');
    await client.query('ALTER TABLE users ADD COLUMN IF NOT EXISTS telefone VARCHAR(20)');
    
    console.log('✅ Tabela "users" pronta e atualizada.');

    // Função para popular dados iniciais (Seeding)
    const res = await client.query('SELECT COUNT(*) FROM users');
    if (parseInt(res.rows[0].count) === 0) {
      console.log('🌱 Populando dados iniciais...');
      await client.query(`
        INSERT INTO users (nome, email, data_nascimento, telefone) VALUES
        ('Mylena Stoduto', 'mylena@exemplo.com', '1995-05-15', '(11) 99999-9999'),
        ('João Silva', 'joao@estudo.com', '1990-10-20', '(21) 88888-8888'),
        ('Maria Souza', 'maria@dev.com', '1998-02-10', '(31) 77777-7777');
      `);
      console.log('✅ Dados iniciais inseridos com sucesso.');
    }

    client.release();
  } catch (err) {
    console.error('❌ Erro no Banco de Dados:', err.message);
  }
};

module.exports = {
  query: (text, params) => pool.query(text, params),
  initDb,
};
