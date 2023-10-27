import { Router } from "express";
import {
  createNews,
  getAllNews,
  getOneNews,
  removeNews,
  // updateNews,
} from "../controller/newsController";

const newsRouter = Router(); //single get
newsRouter.get("/news/:newsID", getOneNews);
//get all
newsRouter.route("/allnewsfeed").get(getAllNews);

//create
newsRouter.post("/createNewsFeed", createNews);
//update
// bookRouter.route("/updatenews/:newsId").patch(updateNews);
//deletecre
newsRouter.delete("/removingbook/:newsId", removeNews);
export default newsRouter;
