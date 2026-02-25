FROM node:20-alpine AS installer
RUN corepack enable && corepack prepare pnpm@9.0.0 --activate
WORKDIR /app
COPY . .
RUN pnpm install --frozen-lockfile

FROM node:20-alpine AS runner
RUN corepack enable && corepack prepare pnpm@9.0.0 --activate
WORKDIR /app
COPY --from=installer /app .

EXPOSE 4004
CMD ["pnpm", "--filter", "api-gateway", "start"]
