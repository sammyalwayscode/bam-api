import mongoose from "mongoose";

const DB_URL = "mongodb://0.0.0.0:27017/newsFeedDatabase";
const atlasURI =
  "mongodb+srv://Sammy:eUi7jmVaEcXSpd61@cluster0.aqlrqqw.mongodb.net/allStar?retryWrites=true&w=majority";

export const dbConfig = async () => {
  try {
    const dbConnect = await mongoose.connect(atlasURI);
    console.log(`connected to ${dbConnect.connection.host}`);
  } catch (error) {
    console.log(`failed to connect to database`, error);
  }
};
