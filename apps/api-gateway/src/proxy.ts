import { createProxyMiddleware } from "http-proxy-middleware";
import { config } from "./config.js";
import type { Express } from "express";

export function setupProxies(app: Express) {
  // Product service
  app.use(
    createProxyMiddleware({
      target: config.services.product,
      changeOrigin: true,
      pathFilter: ["/api/products", "/api/categories"],
      pathRewrite: { "^/api": "" },
    })
  );

  // Order service
  app.use(
    createProxyMiddleware({
      target: config.services.order,
      changeOrigin: true,
      pathFilter: ["/api/user-orders", "/api/orders", "/api/order-chart"],
      pathRewrite: { "^/api": "" },
    })
  );

  // Payment service
  app.use(
    createProxyMiddleware({
      target: config.services.payment,
      changeOrigin: true,
      pathFilter: ["/api/sessions", "/api/webhooks"],
      pathRewrite: { "^/api": "" },
    })
  );

  // Auth service
  app.use(
    createProxyMiddleware({
      target: config.services.auth,
      changeOrigin: true,
      pathFilter: "/api/users",
      pathRewrite: { "^/api": "" },
    })
  );

  // Health check proxy for individual services
  app.use(
    createProxyMiddleware({
      target: config.services.product,
      changeOrigin: true,
      pathFilter: "/api/health",
      router: (req) => {
        const match = req.url?.match(/\/api\/health\/(\w+)/);
        const service = match?.[1] as keyof typeof config.services;
        return config.services[service] || config.services.product;
      },
      pathRewrite: { "^/api/health/[^/]+": "/health" },
    })
  );
}
