"use_stric";
const express = require("express");
const router = express.Router();
const { RequestValidation } = require("./(validation)/RequestValidation");
const { DataExist } = require("./(validation)/DataExist");
const { Auth } = require("./auth");

router.post(
  "/register",
  RequestValidation.register,
  DataExist.email,
  Auth.register
);

router.post("/login", RequestValidation.login, Auth.login);

module.exports = router;
