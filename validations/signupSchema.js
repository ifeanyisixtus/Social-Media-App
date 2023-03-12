const Joi = require("joi");

const signupSchema = Joi.object({
  email: Joi.string().email().required(),
  username: Joi.string().alphanum().min(3).required(),
  password: Joi.string().min(8).required(),
  avatarUrl: Joi.string(),
});

module.exports = signupSchema;
