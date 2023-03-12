const loginSchema = require("../validations/loginSchema");
const postSchema = require("../validations/postSchema");
const signupSchema = require("../validations/signupSchema");

const validateLogin = async (req, res, next) => {
  try {
    await loginSchema.validateAsync({
      ...req.body,
    });

    next();
  } catch (err) {
    return res.status(401).json({ error: err.message });
  }
};

const validateSignup = async (req, res, next) => {
  try {
    await signupSchema.validateAsync({
      ...req.body,
    });

    next();
  } catch (err) {
    return res.status(401).json({ error: err.message });
  }
};

const validatePost = async (req, res, next) => {
  try {
    await postSchema.validateAsync({
      ...req.body,
    });

    next();
  } catch (err) {
    return res.status(401).json({ error: err.message });
  }
};

module.exports = {
  validateLogin,
  validateSignup,
  validatePost,
};
