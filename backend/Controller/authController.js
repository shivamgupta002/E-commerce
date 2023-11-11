import authModel from "../Models/authModel.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

class authController {
  // ---------------------------  Registration ----------------------------------------
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

  // ---------------------------  Login ----------------------------------------

  static login = async (req, res) => {
    const { email, password } = req.body;
    try {
      if (email && password) {
        const isUser = await authModel.findOne({ email: email });
        if (isUser) {
          if (
            email === isUser.email &&
            (await bcryptjs.compare(password, isUser.password))
          ) {
            const token = jwt.sign({ userID: isUser._id }, "shivam", {
              //secrete Key is shivam
              expiresIn: "2d",
            });
            return res
              .status(200)
              .json({ message: "Login Successful", token, name: isUser.name });
          } else {
            return res.status(400).json({ message: "Invalid Credentials" });
          }
        } else {
          return res.status(400).json({ message: "User Not found" });
        }
      } else {
        return res.status(400).json({ message: "All Fields are required" });
      }
    } catch (e) {
      console.log(e.message);
    }
  };

  // ---------------------------  Change Password ----------------------------------------

  static changePassword = async (req, res) => {
    const { newPassword, confirmPassword } = req.body;
    try {
      if (newPassword && confirmPassword) {
        if (newPassword === confirmPassword) {
          const genSalt =await bcryptjs.genSalt(10);
          const hashedPassword = await bcryptjs.hash(newPassword, genSalt);
          await authModel.findByIdAndUpdate(req.user._id, {
            password: hashedPassword,
          });
          return res
            .status(200)
            .json({ message: "Password change Successfully" });
        } else {
          return res
            .status(401)
            .json({ message: "Password and confirm password not match" });
        }
      } else {
        return res.status(400).json({ message: "All Fields are required" });
      }
    } catch (e) {
      console.log(e.message);
    }
  };
}

export default authController;
