import express, { Request, Response } from "express";
import bodyParser from "body-parser";
// eslint-disable-next-line @typescript-eslint/no-var-requires
require("dotenv").config();
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
app.listen("4001", (): void => {
  console.log(`server running ${PORT}`);
});
