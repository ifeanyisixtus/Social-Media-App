const loginSchema = require("../validations/loginSchema");
const postSchema = require("../validations/postSchema");
const commentSchema = require("../validations/commentSchema");
const signupSchema = require("../validations/signupSchema");

const validateLogin = async (req, res, next) => {
  try {
    await loginSchema.validateAsync(
      {
        ...req.body,
      },
      { abortEarly: false }
    );

    next();
  } catch (err) {
    return res.status(401).json({ error: err.message });
  }
};

const validateSignup = async (req, res, next) => {
  try {
    await signupSchema.validateAsync(
      {
        ...req.body,
      },
      { abortEarly: false }
    );

    next();
  } catch (err) {
    return res.status(401).json({ error: err.message });
  }
};

const validatePost = async (req, res, next) => {
  try {
    await postSchema.validateAsync(
      {
        ...req.body,
      },
      { abortEarly: false }
    );

    next();
  } catch (err) {
    return res.status(401).json({ error: err.message });
  }
};

const validateComment = async (req, res, next) => {
  try {
    await commentSchema.validateAsync({
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
  validateComment,
};
