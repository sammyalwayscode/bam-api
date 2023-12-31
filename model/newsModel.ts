import mongoose from "mongoose";
import { iNews } from "../interfaces/allInterfaces";

interface news extends iNews, mongoose.Document {}

const newsSchema = new mongoose.Schema<iNews>(
  {
    title: {
      type: String,
    },
    reporterName: {
      type: String,
    },
    newsImage: {
      type: String,
    },
    details: {
      type: String,
    },
  },
  { timestamps: true }
);

const bookModel = mongoose.model<news>("Books", newsSchema);

export default bookModel;
