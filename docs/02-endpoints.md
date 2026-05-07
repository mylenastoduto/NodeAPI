# Documentação dos Endpoints

Nesta fase inicial, criamos três tipos comuns de endpoints para exemplificar o funcionamento do Express.

## 1. GET `/`
Uma rota raiz simples que retorna uma mensagem de boas-vindas. Útil para verificar se o servidor está online.

## 2. GET `/saudacao/:nome`
Exemplo de uso de **Parâmetros de Rota** (`route params`).
- O `:` indica que `nome` é uma variável.
- Acessamos esse valor através de `req.params.nome`.

## 3. POST `/info`
Exemplo de recebimento de dados no **Corpo da Requisição** (`request body`).
- Para que isso funcione, usamos o middleware `app.use(express.json())`.
- Os dados enviados pelo cliente chegam em `req.body`.

### Como Testar
Você pode usar ferramentas como Postman, Insomnia ou até mesmo o `curl` no terminal:

```bash
# Testando o GET simples
curl http://localhost:3000/

# Testando o GET com parâmetro
curl http://localhost:3000/saudacao/Mylena

# Testando o POST (enviando JSON)
curl -X POST http://localhost:3000/info \
     -H "Content-Type: application/json" \
     -d '{"projeto": "Estudo NodeAPI", "tecnologia": "Express"}'
```
