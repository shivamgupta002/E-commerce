import productModel from "../Models/ProductModel.js";

class productController {
  // ---------------------- Add Product---------------------------------------

  static addProduct = async (req, res) => {
    const { title, image, price, rating } = req.body;
    try {
      if (title && image && price && rating) {
        const isProduct = await productModel.findOne({ title: title });
        if (isProduct) {
          return res
            .status(208)
            .json({ message: "This product is already present" });
        } else {
          const newProduct = await productModel({
            title,
            image,
            price,
            rating,
          }).save();
          if (newProduct) {
            return res
              .status(201)
              .json({ message: "Product Save Successfully" });
          } else {
            return res.status(209).json({ message: "Not save" });
          }
        }
      } else {
        return res.status(208).json({ message: "All fields are required" });
      }
    } catch (e) {
      console.log(e.message);
    }
  };

  // ---------------------- Get ALL Product---------------------------------------
  static getAllProduct = async (req, res) => {
    try {
      const product = await productModel.find();
      if (product) {
        return res.status(201).json({ product });
      } else {
        return res.status(208).json({ message: "No product Found" });
      }
    } catch (e) {
      console.log(e.message);
    }
  };
}

export default productController;