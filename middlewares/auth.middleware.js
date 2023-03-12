const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const authGuard = async (req, res, next) => {
  const token = req.cookies.jwt;
  const authSecret = process.env.JWT_SECRET_KEY;

  //   check if jwt exists and verify it is valid
  if (token) {
    jwt.verify(token, authSecret, (err, user) => {
      if (err) return res.status(403).json({ error: "unable to login" });
      req.user = user;
      next();
    });
  } else {
    return res
      .status(401)
      .json({ error: "unauthorized to access route. please login" });
  }
};

module.exports = authGuard;
