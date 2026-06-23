# Dockerfile
FROM node:18-alpine as build

WORKDIR /app

# Copiar package.json e package-lock.json
COPY package*.json ./

# Instalar dependências
RUN npm ci --only=production

# Copiar o resto do código
COPY . .

# Construir o projeto
RUN npm run build

# Estágio de produção
FROM nginx:alpine

# Copiar os arquivos buildados para o nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Copiar configuração customizada do nginx (opcional)
# COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]