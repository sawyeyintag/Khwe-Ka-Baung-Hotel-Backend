import { Express, Request, Response } from "express";
import swaggerUi from "swagger-ui-express";
import log from "./logger";
import { PORT } from "../secret";

// Import the combined swagger document
import swaggerDocument from "../docs";

function swaggerDocs(app: Express) {
  // Swagger page
  app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

  // Docs in JSON format
  app.get("/docs.json", (req: Request, res: Response) => {
    res.setHeader("Content-Type", "application/json");
    res.send(swaggerDocument);
  });

  log.info(`Docs available at http://localhost:${PORT}/docs`);
}

export default swaggerDocs;
