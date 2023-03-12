const authService = require("../services/auth.service");

const login = async (req, res) => {
  try {
    const user = await authService.login(req.body);
    if (user) {
      // setcookie using auth token
      await authService.setCookie(user.authToken, res);

      return res.status(200).json({ success: true, token: user.authToken });
    }
  } catch (error) {
    return res.status(401).json({ error: error.message });
  }
};

const logout = async (req, res) => {
  res.cookie("jwt", "", { maxAge: 1 });
  return res.status(200).json({ success: true, message: "logout successful" });
};

module.exports = { login, logout };
