const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const User = require("../models/user.model");
const bcrypt = require("bcrypt");

dotenv.config();

class AuthService {
  async generateAuthToken(id) {
    const authSecret = process.env.JWT_SECRET_KEY;
    const token = await jwt.sign({ id }, authSecret, { expiresIn: "1d" });

    return { authToken: token };
  }

  async setCookie(value, res) {
    const expire = 24 * 60 * 60 * 1000;

    return res.cookie("jwt", value, {
      httpOnly: true,
      maxAge: expire,
    });
  }

  async login(newUser) {
    const { email, password } = newUser;

    // const user = await User.findOne({ $or: [{ email }, { username }] });
    const user = await User.findOne({ email });

    if (user) {
      const verifyPwdMatch = await bcrypt.compare(password, user.password);

      if (verifyPwdMatch) {
        const token = this.generateAuthToken(user._id);

        return token;
      }

      throw new Error("invalid username or password");
    }

    throw new Error("invalid username or password");
  }
}

module.exports = new AuthService();
