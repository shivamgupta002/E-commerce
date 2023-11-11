import jwt from "jsonwebtoken";
import authModel from "../Models/authModel.js";

const checkIsUserAuthenticated = async (req, res, next) => {
  let token;
  const { authorization } = req.headers;
  if (authorization && authorization.startsWith("Bearer")) {
    try {
      token = authorization.split(" ")[1];
      //verify token
      const { userID } = jwt.verify(token, "shivam");
      req.user = await authModel.findById(userID).select("--password");
      next();
    } catch (e) {
      console.log(e.message);
      return res.status(400).json({ message: "UnAuthorization Access" });
    }
  } else {
    return res.status(400).json({ message: "UnAuthorization Access" });
  }
};
export default checkIsUserAuthenticated;
