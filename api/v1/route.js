"use_stric";
const express = require("express");

const router = express.Router();

const { TokenValidate } = require("../middleware/TokenValidate");

const loginRoute = require("./controllers/auth/index");
router.use("/auth/", loginRoute);

const user = require('./controllers/users/index')
router.use('/user/', user)

module.exports = router;
