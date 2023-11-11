import mongoose from "mongoose";

const authSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  phone: {
    type: Number,
  },
  password: {
    type: String,
  },
});

const authModel = mongoose.model("users", authSchema);

export default authModel;
