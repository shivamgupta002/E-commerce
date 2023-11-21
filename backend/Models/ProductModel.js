import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  image: {
    type: String,
  },
  price: {
    type: String,
  },
  rating: {
    type: String,
  },
  category: {
    type: String,
  },
});

const productModel = mongoose.model("product", productSchema);

export default productModel;
