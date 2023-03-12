const Joi = require("joi");

const postSchema = Joi.object({
  title: Joi.string().min(3).trim(),
  description: Joi.string().required().trim(),
});

module.exports = postSchema;
