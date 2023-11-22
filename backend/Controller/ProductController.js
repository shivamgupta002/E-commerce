import productModel from "../Models/ProductModel.js";

class productController {
  // ---------------------- Add Product---------------------------------------

  static addProduct = async (req, res) => {
    const { title, image, price, rating, category } = req.body;
    try {
      if (title && image && price && rating && category) {
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
            category,
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
        return res.status(210).json({ message: "All fields are required" });
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

  // ---------------------- Get Product By Id---------------------------------------
  static getProductById=async(req,res)=>{
    const _id=req.params.id;
    try{
      const product=await productModel.findById(_id)
      if (product) {
        return res.status(201).json({ product });
      } else {
        return res.status(208).json({ message: "No product Found on given id" });
      }
    } catch (e) {
      console.log(e.message);
    }
  }


  // ---------------------- Delete Product---------------------------------------
  static deleteProduct = async (req, res) => {
    const id = req.params.id;
    try {
      const product = await productModel.findByIdAndDelete(id);
      if (product) {
        return res
          .status(201)
          .json({ message: "Product Deleted Successfully" });
      } else {
        return res.status(208).json({ message: "Not deleted by given id" });
      }
    } catch (e) {
      console.log(e.message);
    }
  };

  // ---------------------- Update Product---------------------------------------
  static updateProduct = async (req, res) => {
    const id = req.params.id;
    const { title, image, price, rating, category } = req.body;
    try {
      let response = await productModel.findByIdAndUpdate(id, {
        title,
        image,
        price,
        rating,
        category,
      });
      response = await response.save();
      if (response) {
        return res.status(201).json({ message: "Update Successfully" });
      } else {
        return res.status(208).json({ message: "Not Update" });
      }
    } catch (e) {
      console.log(e.message);
    }
  };
}

export default productController;
