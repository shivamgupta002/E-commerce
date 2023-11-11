import authModel from "../Models/authModel.js";
import bcryptjs from "bcryptjs";
class authController {
  static registration = async (req, res) => {
    const { name, email, phone, password } = req.body;
    try {
      if (name && email && phone && password) {
        const isUser = await authModel.findOne({ email: email });
        if (isUser) {
          return res.status(400).json({ message: "User Already found" });
        } else {
          // //password Hashing
          const genSalt = await bcryptjs.genSalt(10);
          const hashedPassword = await bcryptjs.hash(password, genSalt);
          // //save the User
          const newUser = await authModel({
            name,
            email,
            phone,
            password: hashedPassword,
          }).save();

          if (newUser) {
            return res.status(200).json({ message: "Successfully Registered" });
          } else {
            return res.status(205).json({ message: "Not Registered" });
          }
        }
      } else {
        return res.status(400).json({ message: "All Field are required" });
      }
    } catch (e) {
      console.log(e.message);
    }
  };
}

export default authController;
