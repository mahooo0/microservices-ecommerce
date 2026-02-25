export const config = {
  port: parseInt(process.env.PORT || "4004", 10),
  corsOrigins: (process.env.CORS_ORIGINS || "http://localhost:3002,http://localhost:3003").split(","),
  services: {
    product: process.env.PRODUCT_SERVICE_URL || "http://localhost:4000",
    order: process.env.ORDER_SERVICE_URL || "http://localhost:4001",
    payment: process.env.PAYMENT_SERVICE_URL || "http://localhost:4002",
    auth: process.env.AUTH_SERVICE_URL || "http://localhost:4003",
  },
} as const;
