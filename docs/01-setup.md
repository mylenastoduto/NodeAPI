# Configuração Inicial do Projeto

Este documento explica os primeiros passos dados para configurar este projeto backend com Node.js e Express.

## 1. Inicialização do NPM

O comando `npm init -y` foi executado para criar o arquivo `package.json` com as configurações padrão. O `package.json` é o "mapa" do projeto, onde ficam listadas as dependências, scripts e metadados.

## 2. Instalação do Express

Instalamos o Express usando:
```bash
npm install express
```
O Express é um framework minimalista para Node.js que facilita a criação de rotas e o gerenciamento de requisições HTTP.

## 3. Estrutura de Pastas

Criamos uma estrutura simples:
- `src/`: Contém o código fonte da aplicação.
- `docs/`: Contém a documentação (arquivos Markdown) para estudo.

## 4. O Servidor Básico (`src/index.js`)

No arquivo `src/index.js`, fizemos o seguinte:
- Importamos o express.
- Configuramos o middleware `express.json()` para que a API consiga ler corpos de requisição em formato JSON.
- Definimos uma porta (3000).
- Criamos a primeira rota GET.
