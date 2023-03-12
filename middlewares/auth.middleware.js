const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const authGuard = async (req, res, next) => {
  const token = req.cookies.jwt;
  const authSecret = process.env.JWT_SECRET_KEY;

  //   check if jwt exists and verify it is valid
  if (token) {
    try {
      await jwt.verify(token, authSecret);
      next();
    } catch (error) {
      next(error);
    }
  } else {
    return res.status(401).json({
      error: "unauthorized to access route",
    });
  }
};

module.exports = authGuard;
