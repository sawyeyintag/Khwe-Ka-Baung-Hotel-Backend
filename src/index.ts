import express, { Express, Request, Response } from "express";
import cors from "cors";
import rootRouter from "./routes";
import { PORT } from "./secret";
import { errorMiddleware } from "./middlewares/error";

const app: Express = express();

// app.use(cors());
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use("/api", rootRouter);
app.use(errorMiddleware);

app.get("", (req: Request, res: Response) => {
  res.send("Hello, world!");
});

app.listen(PORT, () => console.log(`Port is running on localhost:${PORT}`));

export default app;
