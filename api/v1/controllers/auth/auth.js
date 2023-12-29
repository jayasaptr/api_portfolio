const PrismaClient = require("@prisma/client").PrismaClient;
const bcrypt = require("bcryptjs");
const prisma = new PrismaClient();
const { TokenGenerator } = require("../../../common/generate-token");
const Response = require("../../../utils/Response");

const {
  CODE_GLOBAL_ERROR,
  STATUS_GLOBAL_ERROR,
  CODE_DATA_CONFLICT,
  STATUS_DATA_CONFLICT,
  STATUS_OK,
  CODE_OK,
} = require("../../../utils/ResponseCode");
const { use } = require("../users");
class Auth {
  static register = async (req, res) => {
    const { name, email, password } = req.body;
    const data = {
      name,
      email,
      password: bcrypt.hashSync(password, bcrypt.genSaltSync(10)),
    };

    // create user
    const user = await prisma.user.create({
      data,
    });
    if (!user) {
      return res.status(CODE_GLOBAL_ERROR).json({
        meta: {
          code: CODE_GLOBAL_ERROR,
          message: "Failed to create user",
        },
      });
    }
    const response = new Response(STATUS_OK, "Register berhasil").with_data(
      user
    );

    delete user.token;

    return res.status(CODE_OK).json(response);
  };

  static login = async (req, res) => {
    const { email, password } = req.body;
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    if (!user) {
      const response = new Response(
        STATUS_GLOBAL_ERROR,
        "Email tidak terdaftar"
      );
      return res.status(CODE_GLOBAL_ERROR).json(response);
    }
    const checkPassword = bcrypt.compareSync(password, user.password);
    if (!checkPassword) {
      const response = new Response(
        STATUS_GLOBAL_ERROR,
        "Password tidak sesuai"
      );
      return res.status(CODE_GLOBAL_ERROR).json(response);
    }
    const token = TokenGenerator.GlobalTokenGenerate(user);

    await prisma.user.update({
      where: {
        id: Number(user.id),
      },
      data: {
        token: token.token,
      },
    });

    delete user.token;
    delete user.password;

    const ress = new Response(STATUS_OK, "Login berhasil")
      .with_data(user)
      .with_token(token.token);

    return res.status(CODE_OK).json(ress);
  };
}

module.exports = { Auth };
