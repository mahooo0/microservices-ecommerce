import { createProxyMiddleware, type Options } from "http-proxy-middleware";
import { config } from "./config.js";
import type { Express } from "express";

const defaultOptions: Partial<Options> = {
  changeOrigin: true,
  pathRewrite: { "^/api": "" },
};

export function setupProxies(app: Express) {
  // Product service
  app.use(
    "/api/products",
    createProxyMiddleware({
      ...defaultOptions,
      target: config.services.product,
    })
  );

  app.use(
    "/api/categories",
    createProxyMiddleware({
      ...defaultOptions,
      target: config.services.product,
    })
  );

  // Order service
  app.use(
    "/api/user-orders",
    createProxyMiddleware({
      ...defaultOptions,
      target: config.services.order,
    })
  );

  app.use(
    "/api/orders",
    createProxyMiddleware({
      ...defaultOptions,
      target: config.services.order,
    })
  );

  app.use(
    "/api/order-chart",
    createProxyMiddleware({
      ...defaultOptions,
      target: config.services.order,
    })
  );

  // Payment service
  app.use(
    "/api/sessions",
    createProxyMiddleware({
      ...defaultOptions,
      target: config.services.payment,
    })
  );

  app.use(
    "/api/webhooks",
    createProxyMiddleware({
      ...defaultOptions,
      target: config.services.payment,
    })
  );

  // Auth service
  app.use(
    "/api/users",
    createProxyMiddleware({
      ...defaultOptions,
      target: config.services.auth,
    })
  );

  // Health check proxy for individual services
  app.use(
    "/api/health/:service",
    createProxyMiddleware({
      ...defaultOptions,
      target: config.services.product, // default, overridden by router
      router: (req) => {
        const service = req.params?.service as keyof typeof config.services;
        return config.services[service] || config.services.product;
      },
      pathRewrite: { "^/api/health/[^/]+": "/health" },
    })
  );
}
