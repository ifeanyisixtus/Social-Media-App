const Joi = require("joi");

const postSchema = Joi.object({
  body: Joi.string().required().trim(),
});

module.exports = postSchema;
