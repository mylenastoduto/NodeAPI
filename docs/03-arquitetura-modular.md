# Arquitetura Modular (Routes & Controllers)

Para aumentar a complexidade e a organização do projeto, aplicamos o padrão de separação de responsabilidades. Em vez de ter tudo no `index.js`, dividimos o código em três partes principais:

## 1. O Servidor (`src/index.js`)
Agora ele serve apenas como o ponto de entrada. Ele configura o Express, aplica middlewares globais e importa as rotas. Ele não conhece a lógica interna dos endpoints.

## 2. As Rotas (`src/routes/`)
Criamos arquivos de rotas específicos (ex: `userRoutes.js`).
- **Responsabilidade**: Definir os caminhos (URLs) e os métodos HTTP (GET, POST, etc).
- **Vantagem**: Se o projeto crescer (ex: rotas de produtos, rotas de usuários, rotas de login), cada uma terá seu próprio arquivo.

## 3. Os Controllers (`src/controllers/`)
Criamos controllers (ex: `userController.js`).
- **Responsabilidade**: Contém a "regra de negócio" ou a lógica que deve ser executada quando uma rota é acessada.
- **Vantagem**: Torna o código muito mais fácil de ler e testar.

## Fluxo da Requisição
`Cliente` -> `index.js` -> `userRoutes.js` -> `userController.js` -> `Resposta`

---

### Exemplo de Código
No `userRoutes.js`:
```javascript
router.get('/saudacao/:nome', userController.getGreeting);
```
Isso diz ao Express: "Quando alguém chamar GET nesta URL, execute a função `getGreeting` que está lá no `userController`".
