import "express-async-errors";
import dotenv from "dotenv";
dotenv.config();
import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import morgan from "morgan";

const PORT = process.env.PORT;

const app = express();

app.use(morgan("tiny"));

app.use(cors());

app.use(express.json());

app.use((req: Request, res: Response, next: NextFunction) => {
  res.send("Hello World");
});

app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).send(error.message);
});

app.listen(PORT, () => console.log(`Server is running at ${PORT}.`));

export default app;
