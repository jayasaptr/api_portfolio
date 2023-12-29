require('dotenv').config()
const moment = require('moment-timezone')
moment().tz('Asia/Jakarta').format()
const { z } = require('zod')

const constans = class Constans {
  static TEST = z.string().email()

  static BASE_URL = `${process.env.BASE_URL ?? ''}`
  static API_PORT = `${process.env.API_PORT ?? 8000}`

  static TEMP_JWT_SECRET = `${process.env.TEMP_JWT_SECRET ?? ''}`
  static EXPIRED_TIME_TEMP_TOKEN = `${
    process.env.EXPIRED_TIME_TEMP_TOKEN ?? '1m'
  }`

  static EXPIRED_TIME_TOKEN = `${process.env.EXPIRED_TIME_TOKEN ?? '7d'}`

  static JWT_SECRET = `${process.env.JWT_SECRET ?? ''}`
  static JWT_EXPIRATION_TIME = `${process.env.JWT_EXPIRATION_TIME ?? ''}`
  static NODE_ENV = `${process.env.NODE_ENV ?? 'development'}`

  static DATABASE_URL = process.env.DATABASE_URL

  static ENV_HOST =
    `${process.env.NODE_ENV}` === 'development'
      ? `${process.env.DB_HOST_DEV}`
      : `${process.env.DB_HOST}`

  static ENV_USER =
    `${process.env.NODE_ENV}` === 'development'
      ? `${process.env.DB_USER_DEV}`
      : `${process.env.DB_USER}`

  static ENV_PASS =
    `${process.env.NODE_ENV}` === 'development'
      ? `${process.env.DB_PASSWORD_DEV}`
      : `${process.env.DB_PASSWORD}`

  static ENV_DATABASE =
    `${process.env.NODE_ENV}` === 'development'
      ? `${process.env.DB_DATABASE_DEV}`
      : `${process.env.DB_DATABASE}`

  static ENV_PORT =
    `${process.env.NODE_ENV}` === 'development'
      ? `${process.env.DB_PORT_DEV}`
      : `${process.env.DB_PORT}`

  static ENV_OTP_TIME_REQUEST =
    `${process.env.NODE_ENV}` === 'development'
      ? `${process.env.OTP_TIME_REQUEST}`
      : `${process.env.OTP_TIME_REQUEST}`

  static IS_DEBUG = `${process.env.NODE_ENV}` === 'development'

  // static LOGGING = (desc) => {
  //   return console.log(`⚡️[server]: ${desc}`);
  // };

  /* eslint-disable */
  static LOGGING = async (obj) => {
    ;`${process.env.NODE_ENV}` === 'development'
      ? console.log(
          `Time : ${moment().format(
            'YY-MM-DD h:mm:ss a'
          )} - ⚡️[server]: ${obj}`
        )
      : null
  }
}

module.exports = constans

// module.exports = {
//   BASE_URL,
//   JWT_SECRET,
//   JWT_EXPIRATION_TIME,
//   NODE_ENV,
//   REDIS_URL,
//   RATE_LIMIT_POINTS,
//   RATE_LIMIT_DURATION,
//   API_PORT,
//   ENV_DATABASE,
//   ENV_HOST,
//   ENV_PASS,
//   ENV_PORT,
//   ENV_USER,
//   IS_DEBUG,
//   DATABASE_URL
// }
