# Executando Tudo com Docker (API + Banco)

Agora o projeto está totalmente "containerizado". Isso significa que você não precisa nem ter o Node.js instalado na sua máquina real para rodar a aplicação, apenas o Docker.

## 1. O arquivo `Dockerfile`
Este arquivo contém a "receita" para criar uma imagem da nossa aplicação Node.js. Ele diz ao Docker:
- Qual versão do Node usar.
- Como instalar as dependências (`npm install`).
- Como iniciar o servidor (`npm start`).

## 2. Orquestração com Docker Compose
Atualizamos o `docker-compose.yml` para incluir o serviço `api`.
- **`depends_on`**: Informa ao Docker que a API depende do banco de dados para funcionar.
- **Rede Interna**: Dentro do Docker, a API conversa com o banco usando o nome do serviço `db` em vez de `localhost`.

---

## 🚀 Como rodar tudo com um único comando

Na raiz do projeto, execute:

```bash
docker compose up --build
```
*(O `--build` garante que, se você mudou algo no código, o Docker crie uma imagem nova com as mudanças).*

Ou use o script que criei no `package.json`:

```bash
npm run docker:up
```

### O que vai acontecer:
1. O Docker vai subir o banco de dados PostgreSQL.
2. O Docker vai criar a imagem da sua API.
3. O Docker vai subir a API e conectá-la ao banco.
4. Você poderá acessar a API normalmente em `http://localhost:3000`.

## 🔄 Diferença entre Local e Docker

- **Rodando localmente (`npm start`)**: A API usa o banco em `localhost:5432` (configurado no seu `.env`).
- **Rodando no Docker (`docker compose up`)**: A API usa o banco em `db:5432` (configurado dentro do `docker-compose.yml`).

Isso é uma prática comum para garantir que o ambiente de desenvolvimento seja idêntico ao de produção.
