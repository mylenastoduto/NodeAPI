# NodeAPI - Projeto de Estudos

Este é um projeto prático para estudar o desenvolvimento de APIs utilizando Node.js e Express, agora com integração de banco de dados e Docker.

## 🚀 Como começar

### Opção 1: Desenvolvimento Híbrido (Recomendado para codar)
Sobe o banco no Docker e a API localmente. É o modo mais rápido:
```bash
make dev
```

### Opção 2: Docker Total
Sobe tudo (API + Banco) dentro de containers:
```bash
make up
```

## 📚 Documentação para Estudo

Acesse a pasta `docs/` para ver as explicações detalhadas de cada etapa:
1. [Configuração Inicial](docs/01-setup.md)
2. [Explicação dos Endpoints](docs/02-endpoints.md)
3. [Arquitetura Modular (Routes & Controllers)](docs/03-arquitetura-modular.md)
4. [Docker e Banco de Dados (PostgreSQL)](docs/04-docker-database.md)
5. [Guia de Uso da API de Usuários](docs/05-guia-api-usuarios.md)
6. [Executando Tudo com Docker (Full Dockerization)](docs/06-docker-full.md)
7. [Automação com Makefile](docs/07-makefile-automation.md)
8. [Workflow Híbrido (Docker + Local)](docs/08-workflow-hibrido.md)

## 🛠 Tecnologias
- Node.js
- Express
- PostgreSQL
- Docker & Docker Compose
- SQL Puro (biblioteca `pg`)
- Markdown (para documentação)
