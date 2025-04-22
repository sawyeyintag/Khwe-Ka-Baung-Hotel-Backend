import express, { Express, Request, Response } from "express";
import cors from "cors";
import rootRouter from "./routes";
import { PORT } from "./secret";
import { globalErrorHandler } from "./middlewares/global-error.middleware";

import swaggerDocs from "./utils/swagger";
import log from "./utils/logger";

const app: Express = express();

// app.use(cors());
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use("/api", rootRouter);
app.use(globalErrorHandler);

app.get("", (req: Request, res: Response) => {
  res.send("Hello, world!");
});

app.listen(PORT, async () => {
  log.info(`App is running at http://localhost:${PORT}`);

  swaggerDocs(app);
});

export default app;
