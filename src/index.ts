import express, { Request, Response } from "express";
import cors from "cors";
import userRoutes from "./routes/userRoutes";

const app = express();

const port = process.env.PORT;

// app.use(cors());
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use("/users", userRoutes);
app.get("", (req: Request, res: Response) => {
  res.send("Hello, world!");
});

app.listen(port, () => console.log(`Port is running on localhost:${port}`));

export default app;
