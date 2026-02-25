import express from "express";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import { readFileSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { config } from "./config.js";
import { setupProxies } from "./proxy.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const openapiSpec = JSON.parse(
  readFileSync(join(__dirname, "..", "openapi.json"), "utf-8")
);

const app = express();

// CORS — no body parsing (proxied as-is)
app.use(cors({ origin: config.corsOrigins }));

// Swagger UI
app.use("/docs", swaggerUi.serve, swaggerUi.setup(openapiSpec));

// Gateway health check
app.get("/health", (_req, res) => {
  res.json({ status: "ok", service: "api-gateway" });
});

// Proxy routes
setupProxies(app);

app.listen(config.port, () => {
  console.log(`API Gateway running on port ${config.port}`);
  console.log(`Swagger UI: http://localhost:${config.port}/docs`);
});
