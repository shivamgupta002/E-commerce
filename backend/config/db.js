import mongoose from "mongoose";
const connectDB = async () => {
  await mongoose
    .connect("mongodb://localhost:27017/E-commerce")
    .then(() => {
      console.log("DataBase Connected Successfully");
    })
    .catch((e) => {
      console.log(e.message);
    });
};

export default connectDB;
