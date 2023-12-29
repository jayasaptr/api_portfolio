"use_strict";
const express = require("express");
const router = express.Router();
const { User } = require("./user");
const { TokenValidate } = require("../../../middleware/TokenValidate");

/* user routes */
router.get(
  "/",
  // RequestValidation.findOneUser,
  TokenValidate.Token,
  User.findOneUser
);

module.exports = router;
