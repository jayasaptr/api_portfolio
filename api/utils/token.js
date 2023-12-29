'use_strict'
const jwt = require('jsonwebtoken')
const uuid = require('uuid')
require('dotenv').config()

const generate_auth_token = (obj) => {
  const jwt_options = {
    expires_in: '30d',
    jwtid: uuid.v4()
  }
  return {
    token: jwt.sign(
      {
        user: {
          id: obj.id,
          email: obj.email,
          nama: obj.nama,
          hp: obj.hp,
          referall_id: obj.referall_id,
          upline_id: obj.upline_id,
          type_user: obj.type_user
        }
      },
      process.env.JWT_SECRET,
      jwt_options
    ),
    jwtid: jwt_options.jwtid
  }
}

const generate_admin_token = (obj) => {
  const jwt_options = {
    expires_in: '3d',
    jwtid: uuid.v4()
  }
  return {
    token: jwt.sign(
      {
        user: {
          id: obj.id,
          email: obj.email,
          username: obj.username
        }
      },
      process.env.JWT_SECRET,
      jwt_options
    ),
    jwtid: jwt_options.jwtid
  }
}

module.exports = { generate_auth_token, generate_admin_token }
