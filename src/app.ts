import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import ErrorHandler from '../src/middlware/ErrorHandler'
import dotenv  from "dotenv";
dotenv.config()
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.get("/check", (_req: Request, res: Response) => {
  const age: number = 39;
  res.json({ message: "Start the projects", age });
});

import router from "../src/routes/indexRoute";
app.use("/api", router);
const PORT = process.env.PORT || 4001;
app.use(ErrorHandler);

app.listen("4001", (): void => {
  console.log(`server running ${PORT}`);
});


//https://dev.to/juliecherner/authentication-with-jwt-tokens-in-typescript-with-express-3gb1
//https://dev.to/mihaiandrei97/jwt-authentication-using-prisma-and-express-37nk