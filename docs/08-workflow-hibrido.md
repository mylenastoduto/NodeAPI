# Workflow Híbrido (Docker + Local)

Este é o workflow preferido por muitos desenvolvedores durante a fase de codificação intensa, pois elimina o tempo de espera do `docker build`.

## ⚙️ Como funciona?
- **Infraestrutura (Docker)**: O PostgreSQL e o Adminer rodam dentro do Docker. Isso garante que o banco esteja sempre isolado e configurado corretamente.
- **Aplicação (Local)**: A sua API Node.js roda diretamente na sua máquina física.

## 🚀 Vantagens
1. **Velocidade**: Você altera o código e reinicia a API instantaneamente.
2. **Debug**: É mais fácil usar ferramentas de depuração (debuggers) diretamente no VS Code ou terminal local.
3. **Simplicidade**: Você não precisa lidar com redes internas do Docker enquanto desenvolve a lógica.

---

## 🛠 Como usar este Workflow

Com o `Makefile` que configuramos, basta um comando:

```bash
make dev
```

### O que esse comando faz?
1. Executa `docker compose up -d db adminer` para garantir que o banco está online.
2. Executa `npm start` para rodar sua API na sua máquina.

### Configuração importante
Para que este modo funcione, o seu arquivo `.env` deve apontar para `localhost`:
```env
DATABASE_URL=postgres://user:password@localhost:5432/nodeapi_db
```
*(Nota: Dentro do Docker, o endereço seria `db:5432`, mas como a API está rodando localmente, ela "enxerga" o banco no seu `localhost`).*

## 🏁 Quando usar o "Full Docker"?
Use o `make up` (Docker total) quando quiser testar se a aplicação está pronta para ser enviada para produção ou se outra pessoa da equipe quiser rodar o projeto sem instalar o Node.js.
