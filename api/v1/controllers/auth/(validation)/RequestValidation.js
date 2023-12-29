"use_stric";
const { ValidationSchema } = require("./ValidationSchema");
const utils = require("../../../../utils/Utils");
class RequestValidation {
  static register(req, res, next) {
    const { error } = ValidationSchema.register().validate(req.body);
    utils.validationCallback(res, error, next);
  }

  static login(req, res, next) {
    const { error } = ValidationSchema.login().validate(req.body);
    utils.validationCallback(res, error, next);
  }
}

module.exports = { RequestValidation };
