import jwt from "jsonwebtoken";
import User from "../models/user.models.js";

export const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    if (!token) {
      return res.status(401).json({
        message: "Not authorized, please login",
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded) {
      return res.status(401).json({
        message: "Not authorized, please login",
      });
    }

    const user = await User.findById(decoded.userId).select("-password");

    if (!user) {
      return res.status(401).json({
        message: "Not authorized, please login",
      });
    }

    req.user = user;

    next();
  } catch (error) {
    updateProfileconsole.log(
      "Error in protectRoute controller:",
      error.message
    );
    res.status(500).json({
      message: "Internal server error",
    });
  }
};
