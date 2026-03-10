# syntax=docker/dockerfile:1

# ─── Stage 1: Build ───────────────────────────────────────────────────────────
FROM node:20-alpine AS builder

WORKDIR /app

# Устанавливаем зависимости отдельным слоем для кэширования
COPY package*.json ./
RUN npm ci --prefer-offline

# Копируем исходники и собираем проект
COPY . .
RUN npm run build

# ─── Stage 2: Serve ───────────────────────────────────────────────────────────
FROM caddy:2-alpine AS runner

# Копируем собранную статику в корень Caddy
COPY --from=builder /app/dist /srv

# Копируем конфиг веб-сервера
COPY Caddyfile /etc/caddy/Caddyfile

EXPOSE 80 443
