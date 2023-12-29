const { json } = require("express");
const Response = require("../../../../utils/Response");
const PrismaClient = require("@prisma/client").PrismaClient;
const prisma = new PrismaClient();
const {
  STATUS_DATA_CONFLICT,
  CODE_DATA_CONFLICT,
} = require("../../../../utils/ResponseCode");
const { LOGGING } = require("../../../../common/constans");

class DataExist {
  // Check email is exist
  static email = async (req, res, next) => {
    const { email } = req.body;
    const data = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    if (data) {
      const resss = new Response(
        STATUS_DATA_CONFLICT,
        "Email already exist",
        false
      );
      return res.status(CODE_DATA_CONFLICT).json(resss);
    }
    next();
  };
}

module.exports = { DataExist };
