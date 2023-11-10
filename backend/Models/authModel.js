import mongoose from "mongoose";

const authSchema = new mongoose.Schema(
  {
    name: String,
  },
  {
    email: String,
  },
  {
    phone: Number,
  },
  {
    password: String,
  }
);

const authModel = mongoose.model("users", authSchema);

export default authModel;
