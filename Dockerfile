# dependencies image
FROM node:20 AS base
WORKDIR /app
COPY package*.json ./
RUN npm ci

# builder image
FROM base AS builder
WORKDIR /app
COPY . .
RUN npm run build

EXPOSE 80
EXPOSE 443

CMD ["npx", "serve", "out"]