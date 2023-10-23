import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import cors from 'cors';
import dotenv  from "dotenv";
import cookieParser from "cookie-parser";
const app = express();
const port = process.env.SERVER_PORT || 4001;
app.use(cors());
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
dotenv.config()
app.get("/check", (_req: Request, res: Response) => {
  const age: number = 39;
  res.json({ message: "Start the projects", age });
});

import router from "../src/routes/indexRoute";
app.use("/api", router);
const hostname = process.env.HOSTNAME;
app.listen(port, () => {
  return console.log(`Server running at http://${hostname}:${port}`);
});


//https://dev.to/juliecherner/authentication-with-jwt-tokens-in-typescript-with-express-3gb1
//https://dev.to/mihaiandrei97/jwt-authentication-using-prisma-and-express-37nk