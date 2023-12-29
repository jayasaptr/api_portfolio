"use_stric";
const Joi = require("joi").extend(require("@joi/date"));
class ValidationSchema {
  static register() {
    return Joi.defaults((schema) =>
      schema.options({
        allowUnknown: true,
      })
    ).object({
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().required(),
      password_confirmation: Joi.any()
        .valid(Joi.ref("password"))
        .required()
        .messages({
          "any.only": "Password confirmation does not match with password",
        }),
    });
  }

  static login() {
    return Joi.defaults((schema) =>
      schema.options({
        allowUnknown: true,
      })
    ).object({
      email: Joi.string().required(),
      password: Joi.string().required(),
    });
  }
}

module.exports = { ValidationSchema };
