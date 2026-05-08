# Docker e Banco de Dados (PostgreSQL)

Nesta etapa, elevamos o nível do projeto integrando um banco de dados real utilizando Docker. Isso garante que qualquer pessoa possa rodar o banco de dados exatamente com a mesma configuração.

## 1. O que é Docker?
O Docker permite empacotar uma aplicação e suas dependências (como o PostgreSQL) em um "container". Isso evita o clássico problema "na minha máquina funciona".

## 2. Docker Compose
Usamos o `docker-compose.yml` para definir os serviços que nossa aplicação precisa.
- **Serviço `db`**: Sobe um banco PostgreSQL 15.
- **Serviço `adminer`**: Uma interface web para você visualizar as tabelas do banco no navegador (porta 8080).

## 3. Conectando com SQL Puro (`pg`)
Escolhemos usar a biblioteca `pg` (node-postgres) para interagir com o banco.
- **Vantagem**: Você aprende SQL de verdade (`SELECT`, `INSERT`, `CREATE TABLE`).
- **Configuração**: Usamos um `Pool` de conexões em `src/config/database.js`. O `Pool` gerencia múltiplas conexões de forma eficiente para a API.

## 4. Variáveis de Ambiente (`.env`)
Nunca colocamos senhas ou URLs de banco diretamente no código.
- Usamos o arquivo `.env` para guardar o `DATABASE_URL`.
- A biblioteca `dotenv` carrega essas variáveis para o `process.env`.

## Como Testar os Novos Endpoints

1. **Suba os containers**:
   ```bash
   docker compose up -d
   ```

2. **Inicie a API**:
   ```bash
   npm start
   ```

3. **Criar um usuário**:
   ```bash
   curl -X POST http://localhost:3000/users \
        -H "Content-Type: application/json" \
        -d '{"nome": "Mylena", "email": "mylena@exemplo.com"}'
   ```

4. **Listar usuários**:
   ```bash
   curl http://localhost:3000/users
   ```

5. **Acessar o Adminer (Visual)**:
   Abra `http://localhost:8080` no seu navegador.
   - Sistema: PostgreSQL
   - Servidor: `db` (ou `localhost` se estiver fora do docker)
   - Usuário: `user`
   - Senha: `password`
   - Banco: `nodeapi_db`
