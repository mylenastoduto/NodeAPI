# NodeAPI - Projeto de Estudos

Este é um projeto prático para estudar o desenvolvimento de APIs utilizando Node.js e Express, agora com integração de banco de dados e Docker.

## 🚀 Como começar

### Opção 1: Rodar tudo via Docker (Recomendado)
Este comando sobe o banco de dados e a API simultaneamente:
```bash
docker compose up --build
```
Ou via npm:
```bash
npm run docker:up
```

### Opção 2: Rodar apenas o banco no Docker e a API localmente
1. Suba o banco: `docker compose up -d db`
2. Instale as dependências: `npm install`
3. Inicie o servidor: `npm start`

## 📚 Documentação para Estudo

Acesse a pasta `docs/` para ver as explicações detalhadas de cada etapa:
1. [Configuração Inicial](docs/01-setup.md)
2. [Explicação dos Endpoints](docs/02-endpoints.md)
3. [Arquitetura Modular (Routes & Controllers)](docs/03-arquitetura-modular.md)
4. [Docker e Banco de Dados (PostgreSQL)](docs/04-docker-database.md)
5. [Guia de Uso da API de Usuários](docs/05-guia-api-usuarios.md)
6. [Executando Tudo com Docker (Full Dockerization)](docs/06-docker-full.md)

## 🛠 Tecnologias
- Node.js
- Express
- PostgreSQL
- Docker & Docker Compose
- SQL Puro (biblioteca `pg`)
- Markdown (para documentação)
