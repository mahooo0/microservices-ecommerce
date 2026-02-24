FROM node:20-alpine AS installer
RUN corepack enable && corepack prepare pnpm@9.0.0 --activate
RUN apk add --no-cache openssl
WORKDIR /app
COPY . .
RUN pnpm install --frozen-lockfile
RUN pnpm --filter @repo/product-db db:generate

FROM node:20-alpine AS runner
RUN corepack enable && corepack prepare pnpm@9.0.0 --activate
RUN apk add --no-cache openssl
WORKDIR /app
COPY --from=installer /app .

EXPOSE 4000
CMD ["sh", "-c", "pnpm --filter @repo/product-db db:deploy && pnpm --filter product-service start"]
