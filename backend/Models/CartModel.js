import mongoose from "mongoose";

const CartSchema = new mongoose.Schema({
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

const CartModel = mongoose.model("cart", CartSchema);

export default CartModel;
