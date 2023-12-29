const PrismaClient = require("@prisma/client").PrismaClient;
const prisma = new PrismaClient();
const Response = require("../../../utils/Response");
const {
  CODE_GLOBAL_ERROR,
  STATUS_GLOBAL_ERROR,
  CODE_DATA_CONFLICT,
  STATUS_DATA_CONFLICT,
  STATUS_OK,
  CODE_OK,
} = require("../../../utils/ResponseCode");
const { image_resolved, imageResolved } = require("../../../utils/Utils");
class User {
  static findOneUser = async (req, res) => {
    const { id } = req.query;
    if (!id) {
      const { id: idUser } = req.user.user;
      const user = await prisma.user.findUnique({
        where: {
          id: Number(idUser),
        },
        select: {
          id: true,
          name: true,
          email: true,
          role: true,
        },
      });
      if (!user) {
        const ress = new Response(STATUS_GLOBAL_ERROR, "User tidak ditemukan");
        return res.status(CODE_GLOBAL_ERROR).json(ress);
      }
      const response = new Response(STATUS_OK, "User ditemukan").with_data(
        user
      );
      return res.status(CODE_OK).json(response);
    }
    const user = await prisma.user.findUnique({
      where: {
        id: Number(id),
      },
      select: {
        id: true,
        name: true,
        email: true,
      },
    });
    if (!user) {
      const ress = new Response(STATUS_GLOBAL_ERROR, "User tidak ditemukan");
      return res.status(CODE_GLOBAL_ERROR).json(ress);
    }
    const response = new Response(STATUS_OK, "User ditemukan").with_data(user);
    return res.status(CODE_OK).json(response);
  };
}

module.exports = { User };
