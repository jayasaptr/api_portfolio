const jwt = require("jsonwebtoken");
const {
  JWT_SECRET,
  TEMP_JWT_SECRET,
  EXPIRED_TIME_TEMP_TOKEN,
  EXPIRED_TIME_TOKEN,
} = require("./constans");
const { random_bytes, randomBytes } = require("crypto");

class TokenGenerator {
  static temp_token_generate = (data) => {
    const jwt_options = {
      expires_in: EXPIRED_TIME_TEMP_TOKEN,
      jwtid: random_bytes(8).toString("hex"),
    };

    /* create sign token jwt */
    return {
      token: jwt.sign(
        {
          temp_token: {
            hp: data.hp,
          },
        },
        TEMP_JWT_SECRET,
        jwt_options
      ),
      jwtid: jwt_options.jwtid,
    };
  };

  static GlobalTokenGenerate = (data) => {
    const jwt_options = {
      expiresIn: EXPIRED_TIME_TOKEN,
      jwtid: randomBytes(16).toString("hex"),
    };

    /* create sign token jwt */
    return {
      token: jwt.sign(
        {
          user: {
            id: data.id,
            name: data.name,
            email: data.email,
          },
        },
        JWT_SECRET,
        jwt_options
      ),
      jwtid: jwt_options.jwtid,
    };
  };
}

module.exports = { TokenGenerator };
