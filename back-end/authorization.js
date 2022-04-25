require("dotenv").config();
const { JWT_SECRET } = process.env
const { User } = require("./models");
const jwt = require("jsonwebtoken");

module.exports = async (req, res, next) => {
  try {
    const auth = req.headers["authorization"];

    if (!auth) {
      throw new Error("UnAuthorized");
    }

    const token = auth.split("Bearer ")[1];

    if (!token) {
      throw new Error("Unauthorized");
    }

    const verifyToken = jwt.verify(token, JWT_SECRET);

    const user = await User.findByPk(verifyToken.user?.id);

    if (!user) {
      throw new Error("Unauthorized");
    }

    // if (user.role !== "admin") {
    //   throw new Error("Unauthorized");
    // }
    
    req.user = user;
    return next();
  } catch (err) {
    return res.status(401).json({
      error: err.message,
    });
  }
};
