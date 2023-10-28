//importing modules
import express, { Application, Response, Request } from "express";
import { dbConfig } from "./config/database";
import newsRouter from "./router/newsRouter";
import cors from "cors";

//creaing my port
const port: number = 2099;

//application
const app: Application = express();

//middleware
app.use(cors({ origin: "*" }));
app.use(express.json());

//linking my database to my server
dbConfig();

//routes
app.use("/api", newsRouter);

//default get
app.get("/", (req: Request, res: Response): Response => {
  try {
    return res.status(200).json({ message: "Server is running" });
  } catch (error) {
    return res.status(404).json({ message: "Error occured" });
  }
});

//listening to port
app.listen(port, () => {
  console.log("listening on port", port);
});
