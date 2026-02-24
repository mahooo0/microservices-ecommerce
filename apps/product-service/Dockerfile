FROM node:20-alpine AS pruner
RUN corepack enable && corepack prepare pnpm@9.0.0 --activate
WORKDIR /app
COPY . .
RUN npx turbo@2.5.6 prune product-service --docker

FROM node:20-alpine AS installer
RUN corepack enable && corepack prepare pnpm@9.0.0 --activate
RUN apk add --no-cache openssl
WORKDIR /app
COPY --from=pruner /app/out/json/ .
RUN pnpm install --frozen-lockfile
COPY --from=pruner /app/out/full/ .
RUN pnpm --filter @repo/product-db db:generate

FROM node:20-alpine AS runner
RUN corepack enable && corepack prepare pnpm@9.0.0 --activate
RUN apk add --no-cache openssl
WORKDIR /app
COPY --from=installer /app .

EXPOSE 4000
CMD ["sh", "-c", "pnpm --filter @repo/product-db db:deploy && pnpm --filter product-service start"]
