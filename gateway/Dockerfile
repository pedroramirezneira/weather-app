FROM node:22-alpine

WORKDIR /app
COPY . /app

WORKDIR /app/gateway
RUN npm ci --only=production || npm i --production

EXPOSE 3000

CMD ["node", "server.js"]
