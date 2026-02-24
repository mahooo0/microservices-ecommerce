FROM node:20-alpine AS pruner
ENV PNPM_HOME="/pnpm" PATH="/pnpm:$PATH"
RUN corepack enable && corepack prepare pnpm@9.0.0 --activate
RUN pnpm add -g turbo@^2
WORKDIR /app
COPY . .
RUN turbo prune order-service --docker

FROM node:20-alpine AS installer
RUN corepack enable && corepack prepare pnpm@9.0.0 --activate
WORKDIR /app
COPY --from=pruner /app/out/json/ .
RUN pnpm install --frozen-lockfile
COPY --from=pruner /app/out/full/ .

FROM node:20-alpine AS runner
RUN corepack enable && corepack prepare pnpm@9.0.0 --activate
WORKDIR /app
COPY --from=installer /app .

EXPOSE 4001
CMD ["pnpm", "--filter", "order-service", "start"]
