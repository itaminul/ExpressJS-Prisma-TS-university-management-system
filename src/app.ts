import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import ErrorHandler from '../src/middleware/ErrorHandler'
import router from "../src/routes/indexRoute";
import cors from "cors";
import dotenv  from "dotenv";
dotenv.config()
import cookieParser from "cookie-parser";
// import { handlePrismaError } from "./middleware/prismaErrorHandler";
import passport from "passport";
import session from 'express-session';
const app = express();
app.use(cors());
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
dotenv.config()
app.get("/check", (_req: Request, res: Response) => {
  const age: number = 39;
  res.json({ message: "Start the projects", age });
});
app.use("/api", router);
const port = process.env.APP_PORT || 4001;
app.use(
  session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true,
  })
);

app.use(ErrorHandler);
// app.use(handlePrismaError);
app.use(passport.initialize());
const hostname = process.env.HOSTNAME;
app.listen(port, () => {
  return console.log(`Server running at http://${hostname}:${port}`);

});
