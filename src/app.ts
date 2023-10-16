import express, { Request, Response} from "express";

const app = express();

app.get('/', (req: Request, res: Response) => {
  const age: number = 39;
  res.json({ message: 'Start the projects', age});
})
app.listen('4001', (): void => {
  console.log("server running");
})