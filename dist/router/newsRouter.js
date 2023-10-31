"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const newsController_1 = require("../controller/newsController");
const multer_1 = require("../config/multer");
const newsRouter = (0, express_1.Router)(); //single get
newsRouter.get("/news/:newsID", newsController_1.getOneNews);
//get all
newsRouter.route("/allnewsfeed").get(newsController_1.getAllNews);
//create
newsRouter.post("/createNewsFeed", multer_1.avatarUpload, newsController_1.createNews);
//update
// bookRouter.route("/updatenews/:newsId").patch(updateNews);
//deletecre
newsRouter.delete("/removingbook/:newsId", newsController_1.removeNews);
exports.default = newsRouter;
