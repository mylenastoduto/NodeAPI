# Usar a imagem oficial do Node.js
FROM node:20-alpine

# Criar diretório de trabalho
WORKDIR /usr/src/app

# Copiar arquivos de dependências
COPY package*.json ./

# Instalar dependências
RUN npm install

# Copiar o restante do código
COPY . .

# Expor a porta que a API usa
EXPOSE 3000

# Comando para rodar a aplicação
CMD ["npm", "start"]
