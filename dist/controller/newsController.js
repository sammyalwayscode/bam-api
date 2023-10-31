"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeNews = exports.createNews = exports.getAllNews = exports.getOneNews = void 0;
const cloudinary_1 = __importDefault(require("../config/cloudinary"));
const newsModel_1 = __importDefault(require("../model/newsModel"));
//get one News Post
const getOneNews = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const getBook = yield newsModel_1.default.findById(req.params.newsID);
        return res.status(200).json({
            message: "gotten one news",
            data: getBook,
        });
    }
    catch (error) {
        return res.status(400).json({
            message: "error in getting a news",
            data: error.message,
        });
    }
});
exports.getOneNews = getOneNews;
//get all News Post
const getAllNews = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const getNews = yield newsModel_1.default.find();
        return res.status(200).json({
            message: "gotten all books",
            data: getNews,
        });
    }
    catch (error) {
        return res.status(400).json({
            message: "error in getting all News",
            data: error.message,
        });
    }
});
exports.getAllNews = getAllNews;
//create a new post
const createNews = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, reporterName, details } = req.body;
        const cloudImage = yield cloudinary_1.default.uploader.upload(req === null || req === void 0 ? void 0 : req.file.path);
        const book = yield newsModel_1.default.create({
            title,
            reporterName,
            newsImage: cloudImage.secure_url,
            newsImageID: cloudImage.public_id,
            details,
        });
        return res.status(201).json({
            message: "created a new News Feed",
            data: book,
        });
    }
    catch (error) {
        console.log("This Occored", error);
        return res.status(400).json({
            message: "couldn't create News Feed",
            data: error,
        });
    }
});
exports.createNews = createNews;
//update a News
// export const updateNews = async (
//   req: Request,
//   res: Response
// ): Promise<Response> => {
//   try {
//     const { title, details } = req.body;
//     const update = await newsModel.findByIdAndUpdate(
//       req.params.newsID,
//       { title, details },
//       { new: true }
//     );
//     return res.status(200).json({
//       message: "News Post Updated",
//       data: update,
//     });
//   } catch (error) {
//     return res.status(400).json({
//       message: "couldn't update news post",
//       data: error,
//     });
//   }
// };
//delete a news
const removeNews = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const remove = yield newsModel_1.default.findByIdAndRemove(req.params.bookId);
        return res.status(200).json({
            message: "news removed",
            data: remove,
        });
        // const remove1 = await bookModel.findByIdAndDelete()
    }
    catch (error) {
        return res.status(400).json({
            message: "couldn't delete news",
            data: error,
        });
    }
});
exports.removeNews = removeNews;
