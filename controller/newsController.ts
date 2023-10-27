import cloudinary from "../config/cloudinary";
import newsModel from "../model/newsModel";
import { Request, Response } from "express";

//get one News Post

export const getOneNews = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const getBook = await newsModel.findById(req.params.newsID);

    return res.status(200).json({
      message: "gotten one news",
      data: getBook,
    });
  } catch (error: any) {
    return res.status(400).json({
      message: "error in getting a news",
      data: error.message,
    });
  }
};

//get all News Post

export const getAllNews = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const getNews = await newsModel.find();

    return res.status(200).json({
      message: "gotten all books",
      data: getNews,
    });
  } catch (error: any) {
    return res.status(400).json({
      message: "error in getting all News",
      data: error.message,
    });
  }
};

//create a new post
export const createNews = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { title, reporterName, details } = req.body;
    const cloudImage = await cloudinary.uploader.upload(req?.file!.path);

    const book = await newsModel.create({
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
  } catch (error) {
    console.log("This Occored", error);
    return res.status(400).json({
      message: "couldn't create News Feed",
      data: error,
    });
  }
};

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
export const removeNews = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const remove = await newsModel.findByIdAndRemove(req.params.bookId);

    return res.status(200).json({
      message: "news removed",
      data: remove,
    });

    // const remove1 = await bookModel.findByIdAndDelete()
  } catch (error) {
    return res.status(400).json({
      message: "couldn't delete news",
      data: error,
    });
  }
};
