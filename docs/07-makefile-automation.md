# Uso do Makefile

O `Makefile` é uma ferramenta poderosa para automatizar comandos repetitivos no terminal. Em vez de digitar comandos longos do Docker, você pode usar atalhos simples.

## 🚀 Comandos Principais

| Comando | Descrição |
| :--- | :--- |
| `make up` | Sobe a API e o Banco em modo "detached" (no fundo). |
| `make down` | Para e remove os containers. |
| `make restart` | Executa o `down` seguido do `up`. |
| `make logs` | Visualiza o que está acontecendo no servidor em tempo real. |
| `make clean` | Remove tudo, **incluindo os dados do banco**. Útil para resetar o estudo. |

## 💻 Comandos de Terminal (Shell)

Às vezes você precisa entrar "dentro" do container para executar comandos:

*   **Acessar a API:** `make shell-api` (Útil para rodar testes manuais ou checar arquivos).
*   **Acessar o Postgres via CLI:** `make shell-db` (Abre o terminal `psql` diretamente no banco).

## ❓ Como ver todos os comandos
Basta digitar apenas:
```bash
make
```
ou
```bash
make help
```
O script foi configurado para listar automaticamente todas as funções disponíveis com suas descrições.
