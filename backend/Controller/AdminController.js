import AdminModel from "../Models/AdminModel.js";

class adminController {
  static login = async (req, res) => {
    const { email, password } = req.body;
    try {
      if (email && password) {
        if (
          email === "20shivamgupta02@gmail.com" &&
          password === "shivamAdmin@2002"
        ) {
          return res.status(201).json({ message: "Login Successful" });
        } else {
          return res.status(208).json({ message: "Invalid Credentials" });
        }
      } else {
        return res.status(209).json({ message: "All fields are required" });
      }
    } catch (e) {
      console.log(e.message);
    }
  };
}

export default adminController;
