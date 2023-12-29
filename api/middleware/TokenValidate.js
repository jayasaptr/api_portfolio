"use_strict";
const jwt = require("jsonwebtoken");
const PrismaClient = require("@prisma/client").PrismaClient;
const prisma = new PrismaClient();

const Response = require("../utils/Response");
const {
  STATUS_GLOBAL_ERROR,
  CODE_GLOBAL_ERROR,
  STATUS_TOKEN_INVALID,
  CODE_TOKEN_INVALID,
  STATUS_TOKEN_ANAUTHORIZED,
  CODE_TOKEN_ANAUTHORIZED,
  CODE_TOKEN_EXPIRED,
  STATUS_TOKEN_EXPIRED,
  STATUS_DATA_CONFLICT,
  CODE_DATA_CONFLICT,
} = require("../utils/ResponseCode");
const { TEMP_JWT_SECRET, JWT_SECRET, LOGGING } = require("../common/constans");

class TokenValidate {
  static Temp = async (req, res, next) => {
    const auth_header = req.headers.authorization || req.headers.Authorization;
    const token = auth_header && auth_header.split(" ")[1];
    if (token === null) {
      const resss = new Response(STATUS_TOKEN_ANAUTHORIZED, "Unauthorize");
      return res.status(CODE_TOKEN_ANAUTHORIZED).json(resss);
    }

    jwt.verify(token, TEMP_JWT_SECRET, async (err, jwt) => {
      if (err) {
        if (err.message === "jwt expired") {
          const resss = new Response(STATUS_TOKEN_EXPIRED, err.message);
          return res.status(CODE_TOKEN_EXPIRED).json(resss);
        }
        const resss = new Response(STATUS_DATA_CONFLICT, err.message);
        return res.status(CODE_DATA_CONFLICT).json(resss);
      }
      const { hp } = req.body || req.query || req.params;
    });
  };

  static Token = async (req, res, next) => {
    const auth_header = req.headers.authorization || req.headers.Authorization;
    const token = auth_header && auth_header.split(" ")[1];
    if (token === null) {
      const resss = new Response(STATUS_TOKEN_ANAUTHORIZED, "Unauthorize");
      return res.status(CODE_TOKEN_ANAUTHORIZED).json(resss);
    }

    jwt.verify(token, JWT_SECRET, async (err, user) => {
      if (err) {
        if (err.message === "jwt expired") {
          const resss = new Response(STATUS_TOKEN_EXPIRED, err.message);
          return res.status(CODE_TOKEN_EXPIRED).json(resss);
        }
        const resss = new Response(STATUS_DATA_CONFLICT, err.message);
        return res.status(CODE_DATA_CONFLICT).json(resss);
      }

      //cek jika token tidak sesuai dengan user
      const user_token = await prisma.user.findFirst({
        where: {
          token: token,
        },
      });
      if (!user_token) {
        // const resss = new Response(STATUS_TOKEN_INVALID, "Token invalid");
        // return res.status(CODE_TOKEN_INVALID).json(resss);
        const resss = new Response(STATUS_TOKEN_ANAUTHORIZED, "Unauthorize");
        return res.status(CODE_TOKEN_ANAUTHORIZED).json(resss);
      }
      req.user = user;
      next();
    });
  };
}

module.exports = { TokenValidate };
