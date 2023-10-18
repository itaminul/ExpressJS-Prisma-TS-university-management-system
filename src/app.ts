import express, { Request, Response } from "express";
var bodyParser = require("body-parser");
require("dotenv").config();
var app = express();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
//mongodb+srv://adminuser:adminuser@invdb.odnqz.mongodb.net/doctorRxDB?retryWrites=true&w=majority"
app.use(bodyParser.json());

app.get("/check", (_req: Request, res: Response) => {
  const age: number = 39;
  res.json({ message: "Start the projects", age });
});

const router = require("../src/routes/indexRoute");
app.use("/api", router);
const PORT = process.env.PORT || 4001;
app.listen("4001", (): void => {
  console.log(`server running ${PORT}`);
});
