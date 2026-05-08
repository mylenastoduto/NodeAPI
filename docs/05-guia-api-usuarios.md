# Guia de Uso da API de Usuários

Este guia fornece instruções detalhadas sobre como interagir com os endpoints de usuários da nossa API.

## 📋 Pré-requisitos
Certifique-se de que o servidor e o banco de dados estão rodando:
1. `docker compose up -d`
2. `npm start`

---

## 🚀 Endpoints Disponíveis

### 1. Listar Todos os Usuários
Retorna uma lista de todos os usuários cadastrados no banco de dados, incluindo os dados populados automaticamente (seeding).

*   **URL:** `/users`
*   **Método:** `GET`
*   **Exemplo de Resposta (JSON):**
    ```json
    [
      {
        "id": 1,
        "nome": "Mylena Stoduto",
        "email": "mylena@exemplo.com",
        "data_nascimento": "1995-05-15T00:00:00.000Z",
        "telefone": "(11) 99999-9999",
        "criado_em": "2026-05-08T12:00:00.000Z"
      }
    ]
    ```
*   **Como testar (cURL):**
    ```bash
    curl http://localhost:3000/users
    ```

### 2. Cadastrar Novo Usuário
Adiciona um novo usuário ao banco de dados.

*   **URL:** `/users`
*   **Método:** `POST`
*   **Corpo da Requisição (JSON):**
    | Campo | Tipo | Obrigatório | Descrição |
    | :--- | :--- | :--- | :--- |
    | `nome` | String | Sim | Nome completo do usuário. |
    | `email` | String | Sim | E-mail único (não pode repetir). |
    | `data_nascimento` | String | Não | Formato `AAAA-MM-DD`. |
    | `telefone` | String | Não | Ex: `(11) 99999-8888`. |

*   **Exemplo de Corpo:**
    ```json
    {
      "nome": "Ana Souza",
      "email": "ana.souza@email.com",
      "data_nascimento": "1992-08-25",
      "telefone": "(21) 98765-4321"
    }
    ```
*   **Como testar (cURL):**
    ```bash
    curl -X POST http://localhost:3000/users \
         -H "Content-Type: application/json" \
         -d '{"nome": "Ana Souza", "email": "ana.souza@email.com", "data_nascimento": "1992-08-25", "telefone": "(21) 98765-4321"}'
    ```

### 3. Saudação Personalizada
Um endpoint simples para testar parâmetros de rota.

*   **URL:** `/saudacao/:nome`
*   **Método:** `GET`
*   **Como testar:**
    ```bash
    curl http://localhost:3000/saudacao/Mylena
    ```

---

## ⚠️ Possíveis Erros

| Código | Descrição | Motivo Comum |
| :--- | :--- | :--- |
| **400** | Bad Request | Falta de campos obrigatórios (`nome` ou `email`) ou e-mail já cadastrado. |
| **500** | Internal Server Error | Falha de conexão com o banco de dados PostgreSQL. |

## 🛠 Dica de Estudo
Você pode visualizar esses dados de forma gráfica acessando o **Adminer** em seu navegador:
- **URL:** `http://localhost:8080`
- **Dados de Acesso:** Veja o arquivo `docs/04-docker-database.md`.
